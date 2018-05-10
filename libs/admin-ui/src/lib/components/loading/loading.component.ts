import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-loading',
  template: `
    <mat-progress-spinner [color]="color" [mode]="mode" [value]="value">
    </mat-progress-spinner>
  `,
})
export class LoadingComponent {
  @Input() public color: 'accent' | 'primary' | 'warn' = 'accent'
  @Input() public mode: 'determinate' | 'indeterminate' = 'indeterminate'
  @Input() public value: number
}
