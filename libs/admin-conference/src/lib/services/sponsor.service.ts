import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'

import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { Field } from '@ngx-conference/admin-ui'

import { IconSponsorComponent } from '../components/icon-sponsor/icon-sponsor.component'

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  public collectionId = 'Sponsors'
  public displayField = 'title'
  public icon = 'card_giftcard'
  public iconComponent = IconSponsorComponent
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
