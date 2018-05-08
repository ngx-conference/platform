import { BaseModel } from './base.model'
import { Talk } from './talk.model'

export class Sponsor extends BaseModel {
  name: string
  imageUrl?: string
  description?: string
  url?: string
  type?: string
  twitter?: string
  talks?: Talk[]
}
