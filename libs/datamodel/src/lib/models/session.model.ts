import { BaseModel } from './base.model'
import { Day } from './day.model'
import { Conference } from './conference.model'
import { Speaker } from './speaker.model'
import { Sponsor } from './sponsor.model'

export class Session extends BaseModel {
  title: string
  type: string // Free field to define type: presentation/workshop/sponsor session
  day: Day // belongsTo Day
  start: number // 1400
  end: number // 1600
  duration?: number // Duration in minutes
  description?: string
  event?: Conference // belongsTo Conference
  speakers?: Speaker[] // hasMany Speakers
  sponsors?: Sponsor[] // hasMany Sponsors
}
