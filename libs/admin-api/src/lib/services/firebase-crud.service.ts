import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs'

import { fromPromise } from 'rxjs/internal/observable/fromPromise'
import { map } from 'rxjs/internal/operators'
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root',
})
export class FirebaseCrudService {
  constructor(
    public db: AngularFirestore,
    public collectionId: string,
    public parentId: string = null,
  ) {
  }

  private collectionsRef = (path: string): Observable<any[]> => {
    return this.db.collection<any>(path,
      ref => {
        let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (this.parentId) {
          query = query.where('parentId', '==', this.parentId)
        }
        return query
      }).valueChanges()
  }

  private docRef = (path: string) => {
    return this.db.doc<any>(path)
  }

  private colDocRef = (itemId: string) => {
    return this.docRef(`${this.collectionId}/${itemId}`)
  }

  public count(collectionId = null): Observable<number> {
    return this.collectionsRef(collectionId || this.collectionId)
      .map(items => items.length)
  }

  public getItems(collectionId = null): Observable<any[]> {
    return this.collectionsRef(collectionId || this.collectionId)
  }

  public getItem(itemId: string): Observable<any> {
    return this.colDocRef(itemId).valueChanges()
  }

  public addItem(item: any): Observable<any> {
    item.id = item.id || this.db.createId()
    item.created = new Date()
    item.parentId = this.parentId
    return fromPromise(
      this.db
        .collection(this.collectionId)
        .doc(item.id)
        .set(item).then(() => item),
    )
  }

  public updateItem(item: any): Observable<any> {
    item.updated = new Date()
    return fromPromise(
      this.db
        .collection(this.collectionId)
        .doc(item.id)
        .update(item),
    ).pipe(map((data) => data))
  }

  public upsertItem(item: any): Observable<any> {
    return item.id ? this.updateItem(item) : this.addItem(item)
  }

  public deleteItem(id: string): Observable<boolean> {
    return fromPromise(
      this.colDocRef(id)
        .delete()
        .then(() => true),
    )
  }
}
