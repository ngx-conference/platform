import { Injectable } from '@angular/core';
import { FirebaseCrudService } from '../../../../admin-api/src'
import { AngularFirestore } from 'angularfire2/firestore'
import { Field } from '../../../../admin-ui/src'

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
  public collectionId = 'Speakers'
  public displayField = 'name'
  public icon = 'speakers'
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
    Field.textarea('bio', {
      placeholder: 'Bio',
      required: true,
      rows: 3,
      minLength: 5,
    }),
  ]

}
