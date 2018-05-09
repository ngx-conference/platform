import { Component, ViewChild } from '@angular/core'
import { Observable } from 'rxjs/index'
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout'
import { MatDrawer } from '@angular/material'
import { UiService } from '../../services/ui.service'
import { Router } from '@angular/router'

@Component({
  selector: 'ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @ViewChild('drawer') drawer: MatDrawer
  public isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.Handset)

  constructor(
    private breakpointObserver: BreakpointObserver,
    public ui: UiService,
    private router: Router,
  ) {
  }

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
