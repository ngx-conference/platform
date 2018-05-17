import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { take } from 'rxjs/operators'
import { ConferenceService } from '../services/conference.service'

@Injectable({
  providedIn: 'root',
})
export class ConferenceResolver implements Resolve<any> {
  constructor(public service: ConferenceService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const conferenceId = route.paramMap.get('id')

    return this.service.getConference(conferenceId).pipe(take(1))
  }
}
