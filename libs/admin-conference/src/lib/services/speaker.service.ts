import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'

import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { Field } from '@ngx-conference/admin-ui'

import { IconSpeakerComponent } from '../components/icon-speaker/icon-speaker.component'

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  public collectionId = 'Speakers'
  public displayField = 'name'
  public icon = 'speakers'
  public iconComponent = IconSpeakerComponent
  public title = this.collectionId

  public fb: FirebaseCrudService

  constructor(public db: AngularFirestore) {
    this.fb = new FirebaseCrudService(db, this.collectionId)
  }

  public fields = [
    Field.input('name', {
      placeholder: 'Name',
      required: true,
      minLength: 5,
    }),
    Field.input('avatar', {
      placeholder: 'Avatar',
    }),
    Field.textarea('bio', {
      placeholder: 'Bio',
      required: true,
      rows: 3,
      minLength: 5,
    }),
    Field.input('github', {
      placeholder: 'GitHub profile',
      required: false,
      minLength: 5,
    }),
    Field.input('twitter', {
      placeholder: 'Twitter profile',
      required: false,
      minLength: 5,
    }),
  ]

}
