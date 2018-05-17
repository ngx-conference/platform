import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'

import { environment } from '../../../../apps/admin/src/environments/environment'

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
})
export class SiteApiModule {
  constructor(db: AngularFirestore) {
    db.firestore.settings({
      timestampsInSnapshots: true,
    })
  }
}
