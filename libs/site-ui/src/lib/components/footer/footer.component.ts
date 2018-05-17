import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-footer',
  template: `
    <nav class="navbar navbar-dark bg-dark mt-5 fixed-bottom">
      <div class="navbar-expand m-auto navbar-text" [innerHtml]="copyright"></div>
    </nav>
  `,
})
export class FooterComponent {
  @Input() copyright: string
}
