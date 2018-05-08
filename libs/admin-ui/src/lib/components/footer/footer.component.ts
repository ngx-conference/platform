import { Component } from '@angular/core'

@Component({
  selector: 'lib-footer',
  template: `
    <mat-toolbar color="secondary"> MIT License &copy; 2018</mat-toolbar>
  `,
  styles: [`
    mat-toolbar {
      justify-content: center;
      color: #8f8f8f;
    }
  `],
})
export class FooterComponent {
}
