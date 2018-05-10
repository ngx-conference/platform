import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'

import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { Field } from '@ngx-conference/admin-ui'

import { IconTalkComponent } from '../components/icon-talk/icon-talk.component'

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  public collectionId = 'Talks'
  public displayField = 'title'
  public icon = 'present_to_all'
  public iconComponent = IconTalkComponent
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
      options: [{
        value: 'generic',
        label: 'Generic',
      }, {
        value: 'presentation',
        label: 'Presentation',
      }, {
        value: 'sponsor',
        label: 'Sponsor Talk',
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
