import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core'
import { UiService } from '../../services/ui.service'

@Component({
  template: `
    <ui-header [title]="ui.title" [items]="ui.items"></ui-header>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
    <ui-footer [copyright]="ui.copyright"></ui-footer>
  `,
})
export class LayoutComponent implements AfterViewInit {
  public copyright: string
  public items: any[]
  public title: string

  constructor(public ui: UiService, private cd: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.copyright = this.ui.copyright
    this.items = this.ui.items
    this.title = this.ui.title
    this.cd.detectChanges()
  }
}
