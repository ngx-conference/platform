import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header',
  template: `
    <nav class="navbar navbar-dark bg-dark mb-5">
      <a class="navbar-brand" href="/">{{title}}</a>
      <div class="navbar-expand mr-auto">
        <div class="navbar-nav">
          <a class="nav-item nav-link" *ngFor="let item of menuItems"
            [routerLink]="item.link" routerLinkActive="">
            {{item.label}}
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  @Input() public title: string
  @Input() public menuItems: [{ label: string; link: string }]
}
