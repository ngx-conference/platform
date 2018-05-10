import { Field } from '@ngx-conference/admin-ui'

import { IconSponsorComponent } from '../components/icon-sponsor/icon-sponsor.component'

export const CrudSponsor = {
  collectionId: 'Sponsors',
  parent: 'conference',
  icon: 'card_giftcard',
  iconComponent: IconSponsorComponent,
  title: 'Sponsors',
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
