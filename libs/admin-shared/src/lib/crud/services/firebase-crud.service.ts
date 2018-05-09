import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs'

import { AbstractDataService } from './abstract-data.service'
import { fromPromise } from 'rxjs/internal/observable/fromPromise'

@Injectable()
export class FirebaseCrudService implements AbstractDataService {
  public collectionId = 'FirebaseCrudServiceCollectionId'

  private collectionsRef = (path: string): Observable<any[]> => {
    return this.db.collection<any>(path).valueChanges()
  }

  private docRef = (path: string) => {
    return this.db.doc<any>(path)
  }

  private colDocRef = (itemId: string) => {
    return this.docRef(`${this.collectionId}/${itemId}`)
  }

  constructor(public db: AngularFirestore) {}

  public getItems(): Observable<any[]> {
    return this.collectionsRef(this.collectionId)
  }

  public getItem(itemId: string): Observable<any> {
    return this.colDocRef(itemId).valueChanges()
  }

  public addItem(item: any): Observable<any> {
    item.id = item.id || this.db.createId()
    item.created = new Date()
    return fromPromise(
      this.db
        .collection(this.collectionId)
        .doc(item.id)
        .set(item)
    )
  }

  public updateItem(item: any): Observable<any> {
    item.updated = new Date()
    return fromPromise(
      this.db
        .collection(this.collectionId)
        .doc(item.id)
        .update(item)
    )
  }

  public upsertItem(item: any): Observable<any> {
    return item.id ? this.updateItem(item) : this.addItem(item)
  }

  public deleteItem(id: string): Observable<boolean> {
    return fromPromise(
      this.colDocRef(id)
        .delete()
        .then(() => true)
    )
  }
}
