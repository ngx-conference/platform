import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'

@Injectable({
  providedIn: 'root'
})
export class DbResolver implements Resolve<any> {
  constructor(private db: AngularFirestore) {}
  resolve() {
    return this.db
  }
}
