import { Day } from '../../src/models'

import { talksDayFour, talksDayOne, talksDayThree, talksDayTwo } from './talks'
import { event } from './event'

export const dayOne: Day = {
  id: 'ngatl-day-id-1',
  name: 'Workshops day 2',
  date: new Date('2018-01-30'),
  event,
  talks: talksDayOne
}
export const dayTwo: Day = {
  id: 'ngatl-day-id-2',
  name: 'Workshops day 2',
  date: new Date('2018-01-31'),
  event,
  talks: talksDayTwo
}
export const dayThree: Day = {
  id: 'ngatl-day-id-3',
  name: 'Conference day 1',
  date: new Date('2018-02-01'),
  event,
  talks: talksDayThree
}
export const dayFour: Day = {
  id: 'ngatl-day-id-4',
  name: 'Conference day 2',
  date: new Date('2018-02-02'),
  event,
  talks: talksDayFour
}
