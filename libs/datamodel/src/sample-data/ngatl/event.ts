import { Event } from '../../lib/models'

import { dayOne, dayTwo, dayThree, dayFour } from './days'
import { speakers } from './speakers'
import { sponsors } from './sponsors'
import { sessionsDayOne, sessionsDayTwo, sessionsDayThree, sessionsDayFour } from './sessions'

export const event: Event = {
  id: 'ng-atl-2018',
  code: 'ng-atl-2018',
  name: 'NG-ATL 2018',
  days: [dayOne, dayTwo, dayThree, dayFour],
  speakers: [...speakers],
  sponsors: [...sponsors],
  sessions: [...sessionsDayOne, ...sessionsDayTwo, ...sessionsDayThree, ...sessionsDayFour],
}
