import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-title',
  template: `
    <mat-toolbar>
      <mat-icon style="margin-right: 5px;" *ngIf="icon">{{icon}}</mat-icon>
      {{title}}
      <ng-content></ng-content>
    </mat-toolbar>
  `,
})
export class PageTitleComponent {
  @Input() public title
  @Input() public icon
}
