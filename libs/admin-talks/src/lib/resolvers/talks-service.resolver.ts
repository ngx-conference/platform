import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'

import { TalkService } from '../services/talk.service'

@Injectable({
  providedIn: 'root'
})
export class TalksServiceResolver implements Resolve<any> {
  constructor(public service: TalkService) {}
  resolve() {
    return this.service
  }
}
