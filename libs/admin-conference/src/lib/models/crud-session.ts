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
  ]
}
