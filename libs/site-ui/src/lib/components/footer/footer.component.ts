import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-footer',
  template: `
    <nav class="navbar navbar-light bg-light mt-5">
      <div class="navbar-expand m-auto navbar-text" [innerHtml]="copyright"></div>
      <div class="pull-right">
        <a routerLink="/picker">
          <span class="fa fa-crosshairs"></span>
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .fa {
      color: hotpink;
    }
  `]
})
export class FooterComponent {
  @Input() copyright: string
}
