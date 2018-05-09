import { NgModule } from '@angular/core'

import { AngularFireModule } from 'angularfire2'
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireAuthModule } from 'angularfire2/auth'

import { environment } from '../../../../apps/admin/src/environments/environment'

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
})
export class AdminApiModule {
  constructor(
    // app: AppService,
    db: AngularFirestore,
  ) {
    // app.init()
    db.firestore.settings({
      timestampsInSnapshots: true,
    })
  }
}
