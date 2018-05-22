import { BaseModel } from './base.model'
import { Session } from './session.model'

export class Sponsor extends BaseModel {
  name: string
  imageUrl?: string
  description?: string
  url?: string
  type?: string
  twitter?: string
  sessions?: Session[]
}
