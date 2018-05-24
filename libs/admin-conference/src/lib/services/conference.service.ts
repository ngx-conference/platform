import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { AngularFireStorage } from 'angularfire2/storage'

import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { Field, WizardStep, Wizard } from '@ngx-conference/admin-ui'
import { ConferenceIdFields, CrudConference } from '../models/crud-conference'

// Takes the current date and formats it to `YYYY-MM-DD`.
const formattedDate = () => {
  const today = new Date()
  const fmt = num => `0${num}`.slice(-2)
  return [
    today.getFullYear(),
    fmt(today.getMonth() + 1),
    fmt(today.getDate()),
  ].join('-')
}

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {

  public fb: FirebaseCrudService

  constructor(public db: AngularFirestore, public storage: AngularFireStorage) {
    this.fb = new FirebaseCrudService(db, CrudConference.collectionId)

    this.wizard = new Wizard()
    this.wizard.steps = this.wizardSteps
  }

  public wizard: Wizard
  public wizardSteps: WizardStep[] = [
    {
      label: 'Name',
      fields: [...ConferenceIdFields],
    },
    {
      label: 'Dates',
      fields: [
        Field.template('<h4>Conference Dates</h4>'),
        Field.repeat('dates', [
          Field.input('name', {
            label: 'Display name',
            required: true,
          }),
          Field.date('day', {
            label: 'Date',
            required: true,
            defaultValue: formattedDate(),
          }),
        ]),
      ],
    },
    {
      label: 'Rooms',
      fields: [
        Field.template('<h4>Conference Rooms</h4>'),
        Field.repeat('rooms', [
          Field.input('name', {
            label: 'Room name',
            required: true,
          }),
        ]),
      ]
    },
    {
      label: 'Review',
      fields: [],
      review: true,
    },
  ]

  public handlers = {}

  public handleAction({ type, payload }) {
    if (this.handlers[type]) {
      return this.handlers[type](payload)
    }
    return console.log('handleAction unknown:', { type, payload })
  }

  public deleteFile(file) {
    this.storage.ref(file.path).delete()
      .subscribe(() => {
        this.db.doc(`Images/${file.id}`).delete()
          .then(() => console.log('file deleted'))
      })
  }

}
