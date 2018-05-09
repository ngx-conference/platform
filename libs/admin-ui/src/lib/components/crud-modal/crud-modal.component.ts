import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { FormGroup } from '@angular/forms'
import { Observable } from 'rxjs'

@Component({
  selector: 'ui-crud-modal',
  templateUrl: './crud-modal.component.html',
})
export class CrudModalComponent {
  private form = new FormGroup({})

  public saveAction: (data) => Observable<any>
  public fields: any[] = []
  public title: string
  public icon: string

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CrudModalComponent>,
  ) {}

  save(data) {
    this.form.disable()
    this.saveAction(data).subscribe(
      res => this.dialogRef.close({ type: 'SAVED', payload: res }),
      err => console.log(err),
      () => this.form.enable(),
    )
  }
}
