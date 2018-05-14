import { Injectable } from '@angular/core'
import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { AngularFirestore } from 'angularfire2/firestore'

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {
  public crud: FirebaseCrudService

  public items = []

  constructor(public db: AngularFirestore) {
    this.crud = new FirebaseCrudService(this.db, 'Users')
    this.crud.getItems()
      .subscribe(res => this.items = res)
  }

}
