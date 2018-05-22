import { Component } from '@angular/core'

import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core'

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group
        [model]="model[i]"
        [field]="field"
        [options]="options"
        [form]="formControl">
        <div style="text-align: right">
          <button mat-button type="button" (click)="confirmRemove(i)">
            <mat-icon style="margin-right: 3px">delete</mat-icon>
            Remove
          </button>
        </div>
      </formly-group>
    </div>
    <div style="margin:30px 0;">
      <button mat-raised-button type="button" (click)="add()" color="accent">
        <mat-icon style="margin-right: 3px">add</mat-icon>
        Add
      </button>
    </div>
  `,
})
export class RepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder)
  }

  confirmRemove(i) {
    if (window.confirm('Remove user?')) {
      this.remove(i)
    }
  }
}
