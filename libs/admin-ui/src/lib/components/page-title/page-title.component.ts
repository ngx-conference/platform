import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-page-title',
  template: `
    <mat-toolbar [color]="color">
      <mat-icon style="margin: 0 20px;" *ngIf="icon">{{icon}}</mat-icon>
      {{title}}
      <ng-content></ng-content>
    </mat-toolbar>
  `,
})
export class PageTitleComponent {
  @Input() public color
  @Input() public icon
  @Input() public title
}
