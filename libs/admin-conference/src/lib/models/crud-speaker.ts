import { Field } from '@ngx-conference/admin-ui'

import { IconSpeakerComponent } from '../components/icon-speaker/icon-speaker.component'

export const CrudSpeaker = {
  collectionId: 'Speakers',
  parent: 'conference',
  icon: 'speakers',
  iconComponent: IconSpeakerComponent,
  title: 'Speakers',
  fields: [
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
