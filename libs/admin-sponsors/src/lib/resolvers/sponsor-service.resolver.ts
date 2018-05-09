import { Resolve } from '@angular/router'
import { Injectable } from '@angular/core'

import { SponsorService } from '../services/sponsor.service'

@Injectable({
  providedIn: 'root'
})
export class SponsorServiceResolver implements Resolve<any> {
  constructor(public service: SponsorService) {}
  resolve() {
    return this.service
  }
}
