import { Field } from '@ngx-conference/admin-ui'

import { IconSessionComponent } from '../components/icon-session/icon-session.component'

export const CrudSession = {
  collectionId: 'Sessions',
  parent: 'conference',
  icon: 'present_to_all',
  iconComponent: IconSessionComponent,
  title: 'Sessions',
  fields: [
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
    Field.input('room', {
      placeholder: 'Room',
    }),
    Field.input('date', {
      placeholder: 'Date',
      minLength: 8
    }),
    Field.number('start', {
      placeholder: 'Start time',
      minLength: 3
    }),
    Field.input('end', {
      placeholder: 'End Time',
      minLength: 3
    }),
  ]
}
