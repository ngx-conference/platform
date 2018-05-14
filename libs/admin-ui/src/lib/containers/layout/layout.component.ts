import { Component, ViewChild } from '@angular/core'
import { MatDrawer } from '@angular/material'
import { Router } from '@angular/router'
import { Select } from '@ngxs/store'
import { Observable } from 'rxjs/index'

import { UiState } from '../../state/ui.state'

@Component({
  selector: 'ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @Select(UiState) ui$: Observable<any>

  @ViewChild('drawer') drawer: MatDrawer

  constructor(private router: Router) {}

  public handleAction({ type, payload }) {
    switch (type) {
      case 'LOGOUT':
        return this.router.navigate(['/logout'])
      case 'TOGGLE_DRAWER':
        return this.drawer.toggle()
      default: {
        console.log('type', type)
        console.log('payload', payload)
      }
    }
  }
}
