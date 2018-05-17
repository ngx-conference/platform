import { Injectable } from '@angular/core'
import { Resolve, Router } from '@angular/router'
import { ConferenceService } from '../services/conference.service'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ConferenceResolver implements Resolve<any> {
  constructor(public service: ConferenceService, private router: Router) {}

  resolve() {
    if (this.service.conference) {
      return of(this.service.conference)
    } else {
      this.router.navigate(['/picker'])
      return of(false)
    }
  }
}
