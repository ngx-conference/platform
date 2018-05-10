import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { Injectable } from '@angular/core'

import { ConferenceService } from '../services/conference.service'
import { take } from 'rxjs/operators'
import { map } from 'rxjs/internal/operators'
import { UiService } from '@ngx-conference/admin-ui'

@Injectable({
  providedIn: 'root'
})
export class ConferenceUiResolver implements Resolve<any> {
  constructor(private service: ConferenceService, private ui: UiService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.fb.getItem(route.paramMap.get('id')).pipe(
      map(res => {
        let ui = {}
        if (res) {
          ui = {
            appTitle: this.ui.appTitle,
            menuLink: this.ui.menuLink,
            menuTitle: res && res.name || this.ui.menuTitle,
            menuItems: [
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
            ]
          }
        }
        return Object.assign({}, ui)
      }),
      take(1)
    )
    // .subscribe((res) => {
    //   return res
    // })
  }
}
