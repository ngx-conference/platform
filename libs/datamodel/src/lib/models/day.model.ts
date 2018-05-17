import { BaseModel } from './base.model'
import { Event } from './event.model'
import { Session } from './talk.model'

export class Day extends BaseModel {
  name: string // Public name : Day One! / Workshop Day, etc
  date: Date // Calendar date of the day
  event: Event // belongsTo event
  talks?: Session[] // hasMany talks
}
