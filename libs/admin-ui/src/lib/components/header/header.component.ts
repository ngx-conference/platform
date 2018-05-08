import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Observable } from 'rxjs/index'
import { BreakpointState } from '@angular/cdk/layout'

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() appTitle: string
  @Input() isHandset: Observable<BreakpointState>
  @Output() action = new EventEmitter()
}
