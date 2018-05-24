import { BaseModel } from './base.model'
import { Conference } from './conference.model'
import { Session } from './session.model'

export class Room extends BaseModel {
  name: string // Public name : Main Stage, Corridor
  conference?: Conference // belongsTo conference
  sessions?: Session[] // hasMany sessions
}
