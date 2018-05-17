import { BaseModel } from './base.model'
import { Day } from './day.model'
import { Event } from './event.model'
import { Speaker } from './speaker.model'
import { Sponsor } from './sponsor.model'

export class Session extends BaseModel {
  title: string
  type: string // Free field to define type: presentation/workshop/sponsor talk
  day: Day // belongsTo Day
  start: number // 1400
  end: number // 1600
  duration?: number // Duration in minutes
  description?: string
  event?: Event // belongsTo Event
  speakers?: Speaker[] // hasMany Speakers
  sponsors?: Sponsor[] // hasMany Sponsors
}
