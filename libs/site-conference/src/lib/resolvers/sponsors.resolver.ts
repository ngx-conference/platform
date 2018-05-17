import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { take } from 'rxjs/operators'
import { ConferenceService } from '../services/conference.service'

@Injectable({
  providedIn: 'root',
})
export class SponsorsResolver implements Resolve<any> {
  constructor(public service: ConferenceService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getSponsors(route.paramMap.get('id')).pipe(take(1))
  }
}
