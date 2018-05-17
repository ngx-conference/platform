import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { take } from 'rxjs/operators'
import { ConferenceService } from '../services/conference.service'

@Injectable({
  providedIn: 'root',
})
export class SponsorsResolver implements Resolve<any> {
  constructor(public service: ConferenceService) {}

  resolve() {
    return this.service.getSponsors().pipe(take(1))
  }
}
