import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'

import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { Field } from '@ngx-conference/admin-ui'

import { IconSessionComponent } from '../components/icon-session/icon-session.component'

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  public collectionId = 'Sessions'
  public displayField = 'title'
  public icon = 'present_to_all'
  public iconComponent = IconSessionComponent
  public title = this.collectionId

  public fb: FirebaseCrudService

  constructor(public db: AngularFirestore) {
    this.fb = new FirebaseCrudService(db, this.collectionId)
  }

  public fields = [
    Field.input('title', {
      placeholder: 'Title',
      required: true,
      minLength: 5,
    }),
    Field.select('type', {
      placeholder: 'Type',
      required: true,
      defaultValue: 'presentation',
      options: [{
        value: 'generic',
        label: 'Generic',
      }, {
        value: 'presentation',
        label: 'Presentation',
      }, {
        value: 'sponsor',
        label: 'Sponsor Session',
      }, {
        value: 'workshop',
        label: 'Workshop',
      }],
    }),
    Field.textarea('description', {
      placeholder: 'Description',
      required: true,
      rows: 3,
      minLength: 5,
    }),
  ]

}
