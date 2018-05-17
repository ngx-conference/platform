import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-header',
  template: `
    <nav class="navbar navbar-dark bg-dark mb-5 p-3">
      <a class="navbar-brand" routerLink="/picker">{{title}}</a>
      <div class="navbar-expand mr-auto">
        <div class="navbar-nav">
          <a class="nav-item nav-link" *ngFor="let item of items"
            [routerLink]="item.link" routerLinkActive="active">
            {{item.label}}
          </a>
        </div>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  @Input() public title: string
  @Input() public items: [{ label: string; link: string }]
}
