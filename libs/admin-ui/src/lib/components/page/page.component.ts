import { Component } from '@angular/core'

@Component({
  selector: 'ui-page',
  template: `
    <h1>UI Page</h1>
    <ng-content></ng-content>
  `,
  styles: [],
})
export class PageComponent {
}
