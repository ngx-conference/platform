import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'

import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { Field, WizardStep, Wizard } from '@ngx-conference/admin-ui'
import { CrudConference } from '@ngx-conference/admin-conference/src/lib/models/crud-conference'

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

  constructor(public db: AngularFirestore) {
    this.fb = new FirebaseCrudService(db, CrudConference.collectionId)

    this.wizard = new Wizard()
    this.wizard.debug = true
    this.wizard.steps = this.wizardSteps
  }

  public wizard: Wizard
  public wizardSteps: WizardStep[] = [
    {
      label: 'Name',
      fields: [
        Field.input('name', {
          placeholder: 'Enter the name of the conference',
          required: true,
          minLength: 5,
          maxLength: 50,
        }),
        Field.input('id', {
          placeholder: 'This is the Conference ID that will be used in the API',
          required: true,
          disabled: true,
          minLength: 5,
          maxLength: 50,
        }),
      ],
    },
    {
      label: 'Dates',
      fields: [
        Field.date('date', {
          placeholder: 'Date',
          description: 'First day of the conference',
          defaultValue: formattedDate(),
        }),
        Field.number('days', {
          placeholder: 'Days',
          description: 'Number of days of the conference',
          defaultValue: 1,
        }),
      ],
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

}
