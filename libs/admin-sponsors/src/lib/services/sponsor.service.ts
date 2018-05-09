import { Injectable } from '@angular/core';
import { FirebaseCrudService } from '../../../../admin-api/src'
import { AngularFirestore } from 'angularfire2/firestore'
import { Field } from '../../../../admin-ui/src'

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  public collectionId = 'Sponsors'
  public displayField = 'title'
  public icon = 'card_giftcard'
  public title = this.collectionId

  public fb: FirebaseCrudService

  constructor(public db: AngularFirestore) {
    this.fb = new FirebaseCrudService(db, 'Sponsors')
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
        value: 'gold',
        label: 'Gold',
      }, {
        value: 'silver',
        label: 'Silver',
      }, {
        value: 'bronze',
        label: 'Bronze',
      }, {
        value: 'platinum',
        label: 'Platinum',
      }],
    }),
    Field.input('homepage', {
      placeholder: 'Homepage',
      required: true,
      minLength: 5,
    }),
  ]
}
