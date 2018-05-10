import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'

import { SpeakerService } from '../services/speaker.service'

@Injectable({
  providedIn: 'root'
})
export class SpeakerCrudResolver implements Resolve<any> {
  constructor(public service: SpeakerService) {}
  resolve() {
    return this.service
  }
}
