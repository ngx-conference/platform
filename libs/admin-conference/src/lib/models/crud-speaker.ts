import { Field } from '@ngx-conference/admin-ui'

import { IconSpeakerComponent } from '../components/icon-speaker/icon-speaker.component'

export const CrudSpeaker = {
  collectionId: 'Speakers',
  parent: 'conference',
  icon: 'speakers',
  iconComponent: IconSpeakerComponent,
  title: 'Speakers',
  fields: [
    Field.input('id', {
      label: 'ID',
      description: 'Used in the API (auto-generated, static).',
      required: true,
      disabled: true,
      minLength: 5,
      maxLength: 50,
    }),
    Field.input('name', {
      label: 'Name',
      required: true,
      minLength: 5,
    }),
    Field.input('avatar', {
      label: 'Avatar',
    }),
    Field.textarea('bio', {
      label: 'Bio',
      required: true,
      rows: 3,
      minLength: 5,
    }),
    Field.input('github', {
      label: 'GitHub profile',
      minLength: 5,
    }),
    Field.input('twitter', {
      label: 'Twitter profile',
      minLength: 5,
    }),
  ]
}
