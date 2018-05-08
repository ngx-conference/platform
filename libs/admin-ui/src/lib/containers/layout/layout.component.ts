import { Component, ViewChild } from '@angular/core'
import { Observable } from 'rxjs/index'
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout'
import { UiService } from '@ngx-conference/admin-ui/src/lib/services/ui.service'
import { MatDrawer } from '@angular/material'

@Component({
  selector: 'lib-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  @ViewChild('drawer') drawer: MatDrawer
  public isHandset: Observable<
    BreakpointState
  > = this.breakpointObserver.observe(Breakpoints.Handset)

  constructor(
    private breakpointObserver: BreakpointObserver,
    public service: UiService,
  ) {}

  public handleAction({ type, payload }) {
    switch (type) {
      case 'TOGGLE_DRAWER':
        return this.drawer.toggle()
      default: {
        console.log('type', type)
        console.log('payload', payload)
      }
    }
  }
}
