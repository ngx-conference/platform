import { Component, OnInit } from '@angular/core'
import { UiService } from '../../services/ui.service'

@Component({
  selector: 'app-layout',
  template: `
    <ui-header [title]="ui.title" [menuItems]="ui.menuItems"></ui-header>
    <div class="container">
      <ng-content></ng-content>
    </div>
    <ui-footer [copyright]="ui.copyright"></ui-footer>
  `,
})
export class LayoutComponent implements OnInit {
  constructor(public ui: UiService) {}

  ngOnInit() {}
}
