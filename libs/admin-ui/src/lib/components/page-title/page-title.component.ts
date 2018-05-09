import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-title',
  template: `
    <h2>{{title}}</h2>
    <ng-content></ng-content>
  `,
})
export class PageTitleComponent {
  @Input() public title
}
