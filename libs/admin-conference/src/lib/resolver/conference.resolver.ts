import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Injectable } from '@angular/core'

import { ConferenceService } from '../services/conference.service'
import { take } from 'rxjs/operators'
import { map } from 'rxjs/internal/operators'

@Injectable({
  providedIn: 'root'
})
export class ConferenceResolver implements Resolve<any> {
  constructor(private service: ConferenceService ) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.fb.getItem(route.paramMap.get('id')).pipe(
      map(res => Object.assign({}, res)),
      take(1)
    )
  }
}
