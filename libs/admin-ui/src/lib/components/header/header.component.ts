import { Component } from '@angular/core'
import { Observable } from 'rxjs/index'
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout'
import { UiService } from '../../services/ui.service'

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isHandset: Observable<BreakpointState> = this.breakpointObserver.observe(
    Breakpoints.Handset,
  )
  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: UiService,
  ) {}
}
