import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Injectable } from '@angular/core'

import { ConferenceService } from '../services/conference.service'
import { take } from 'rxjs/operators'
import { map } from 'rxjs/internal/operators'
import { UiService } from '@ngx-conference/admin-ui'

@Injectable({
  providedIn: 'root',
})
export class ConferenceUiResolver implements Resolve<any> {
  constructor(private service: ConferenceService, private ui: UiService) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.fb.getItem(route.paramMap.get('id')).pipe(
      map(res => {
        let ui = {}
        if (res) {
          ui = {
            appTitle: res.name,
            menuItems: [
              {
                label: 'Dashboard',
                link: ['/conferences', res.id, 'dashboard'],
                icon: 'dashboard',
              },
              {
                label: 'Speakers',
                link: ['/conferences', res.id, 'speakers'],
                icon: 'speaker',
              },
              {
                label: 'Sponsors',
                link: ['/conferences', res.id, 'sponsors'],
                icon: 'card_giftcard',
              },
              {
                label: 'Talks',
                link: ['/conferences', res.id, 'talks'],
                icon: 'present_to_all',
              },
              {
                label: 'Images',
                link: ['/conferences', res.id, 'images'],
                icon: 'images',
              },
              {
                label: 'Settings',
                link: ['/conferences', res.id, 'settings'],
                icon: 'settings',
              },
            ],
          }
        }
        return Object.assign({}, ui)
      }),
      take(1),
    )
  }
}
