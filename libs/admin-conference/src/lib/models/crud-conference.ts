import { IconTalkComponent } from '../components/icon-talk/icon-talk.component'

import { CrudSpeaker } from './crud-speaker'
import { CrudSponsor } from './crud-sponsor'
import { CrudTalk } from './crud-talk'

export const CrudConference = {
  collectionId: 'Conferences',
  parent: null,
  children: [CrudSpeaker, CrudSponsor, CrudTalk ],
  icon: 'people',
  iconComponent: IconTalkComponent,
  title: 'Conferences',
  fields: []
}
