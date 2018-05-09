import { Resolve } from '@angular/router'
import { SpeakerService } from '@ngx-conference/admin-speakers/src/lib/services/speaker.service'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SpeakerServiceResolver implements Resolve<any> {
  constructor(public service: SpeakerService) {}
  resolve() {
    return this.service
  }
}
