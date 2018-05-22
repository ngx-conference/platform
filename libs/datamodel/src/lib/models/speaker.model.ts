import { BaseModel } from './base.model'
import { Session } from './session.model'

export class Speaker extends BaseModel {
  name: string
  email?: string
  company?: string
  avatarUrl?: string
  bio?: string
  homepage?: string
  twitter?: string
  sessions?: Session[]
}
