import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'

import { FirebaseCrudService } from '@ngx-conference/admin-shared'
import { Observable } from 'rxjs/index'
import { Talk } from '@ngx-conference/datamodel'
import { Field } from '@ngx-conference/admin-ui'

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  public fb: FirebaseCrudService

  public items$: Observable<Talk[]>

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

  constructor(public db: AngularFirestore) {
    this.fb = new FirebaseCrudService(db)
    this.fb.collectionId = 'Talks'
    this.items$ = this.fb.getItems()
  }

}
