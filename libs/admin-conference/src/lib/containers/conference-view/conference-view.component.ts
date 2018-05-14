import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngxs/store'
import { map } from 'rxjs/operators'

import { SetMenuItems, SetTitle } from '@ngx-conference/admin-ui'

import { menuItems } from '../../models/crud-conference'

@Component({
  selector: 'lib-conference-view',
  template: `<router-outlet></router-outlet>`,
})
export class ConferenceViewComponent implements OnDestroy {
  constructor(private route: ActivatedRoute, private store: Store) {
    this.route.data
      .pipe(
        map(data => data['conference'])
      )
      .subscribe(conference => {
        this.store.dispatch([
          new SetMenuItems(menuItems(conference.id)),
          new SetTitle(conference.name)
        ])
      })
  }

  ngOnDestroy() {
    this.store.dispatch([
      new SetMenuItems([]),
      new SetTitle('')
    ])
  }
}
