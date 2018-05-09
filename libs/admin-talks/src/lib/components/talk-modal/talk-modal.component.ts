import { Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'
import { FormGroup } from '@angular/forms'
import { Observable } from 'rxjs'

@Component({
  selector: 'talks-talk-modal',
  templateUrl: './talk-modal.component.html',
})
export class TalkModalComponent {
  private form = new FormGroup({})

  public saveAction: (data) => Observable<any>
  public fields = []

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<TalkModalComponent>,
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
