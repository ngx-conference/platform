import { BaseModel } from './base.model'

import { Day } from './day.model'
import { Speaker } from './speaker.model'
import { Sponsor } from './sponsor.model'
import { Session } from './session.model'

export class Conference extends BaseModel {
  name: string // The name of the event: NG-ATL 2017
  code: string // The code/slug of the event: ng-atl-2017
  speakers?: Speaker[] // hasMany Speakers
  sponsors?: Sponsor[] // hasMany Sponsors
  sessions?: Session[] // hasMany Sponsors
  days?: Day[] // hasMany Sponsors
}
