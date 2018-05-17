import { Field } from '@ngx-conference/admin-ui'
import { IconTalkComponent } from '../components/icon-talk/icon-talk.component'

import { CrudSpeaker } from './crud-speaker'
import { CrudSponsor } from './crud-sponsor'
import { CrudTalk } from './crud-talk'

export const ConferenceIdFields = [
  Field.input('id', {
    placeholder: 'ID to be used in the API (auto-generated, static).',
    required: true,
    disabled: true,
    minLength: 5,
    maxLength: 50,
  }),
  Field.input('name', {
    placeholder: 'Enter the name of the conference.',
    required: true,
    minLength: 5,
    maxLength: 50,
  }),
  Field.input('description', {
    placeholder: 'Short description, tag line or intro text.',
    minLength: 5,
    maxLength: 250,
  }),
]

export const ConferenceAddressFields = [
  Field.group([
    Field.input('address.venue', {
      placeholder: 'Venue',
      minLength: 5,
      maxLength: 50,
    }),
    Field.input('address.address', {
      placeholder: 'Address',
      minLength: 5,
      maxLength: 50,
    }),
    Field.input('address.city', {
      placeholder: 'City',
      minLength: 5,
      maxLength: 50,
    }),
    Field.input('address.state', {
      placeholder: 'State',
      minLength: 5,
      maxLength: 50,
    }),
    Field.input('address.country', {
      placeholder: 'Country',
      minLength: 5,
      maxLength: 50,
    }),
  ]),
]

export const menuItems = (id) => ([
  {
    label: 'Dashboard',
    link: ['/conferences', id, 'dashboard'],
    icon: 'dashboard',
  },
  {
    label: 'Speakers',
    link: ['/conferences', id, 'speakers'],
    icon: 'speaker',
  },
  {
    label: 'Sponsors',
    link: ['/conferences', id, 'sponsors'],
    icon: 'card_giftcard',
  },
  {
    label: 'Talks',
    link: ['/conferences', id, 'talks'],
    icon: 'present_to_all',
  },
  {
    label: 'Images',
    link: ['/conferences', id, 'images'],
    icon: 'images',
  },
  {
    label: 'Settings',
    link: ['/conferences', id, 'settings'],
    icon: 'settings',
  },
])

export const CrudConference = {
  collectionId: 'Conferences',
  parent: null,
  children: [CrudSpeaker, CrudSponsor, CrudTalk ],
  icon: 'people',
  iconComponent: IconTalkComponent,
  title: 'Conferences',
  fields: [
    Field.template('<h3>General information</h3>'),
    ...ConferenceIdFields,
    Field.template('<h3>Location</h3>'),
    ...ConferenceAddressFields,
  ]
}
