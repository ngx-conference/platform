import { Field } from '@ngx-conference/admin-ui'

import { IconTalkComponent } from '../components/icon-talk/icon-talk.component'

export const CrudTalk = {
  collectionId: 'Talks',
  parent: 'conference',
  icon: 'present_to_all',
  iconComponent: IconTalkComponent,
  title: 'Talks',
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
