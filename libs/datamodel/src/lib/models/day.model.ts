import { BaseModel } from './base.model'
import { Conference } from './conference.model'
import { Session } from './session.model'

export class Day extends BaseModel {
  name: string // Public name : Day One! / Workshop Day, etc
  date: Date // Calendar date of the day
  conference: Conference // belongsTo event
  sessions?: Session[] // hasMany sessions
}
