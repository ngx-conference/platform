import { BaseModel } from './base.model'
import { Talk } from './talk.model'

export class Speaker extends BaseModel {
  name: string
  email?: string
  company?: string
  avatarUrl?: string
  bio?: string
  homepage?: string
  twitter?: string
  talks?: Talk[]
}
