import { BaseModel } from './base.model'
import { Event } from './event.model'
import { Talk } from './talk.model'

export class Room extends BaseModel {
  name: string // Public name : Main Stage, Corridor
  event: Event // belongsTo event
  talks?: Talk[] // hasMany talks
}
