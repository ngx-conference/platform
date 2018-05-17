import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { Field } from '@ngx-conference/admin-ui'

@Component({
  selector: 'system-user-form',
  template: `
    <div>
      <ui-form [form]="form" [fields]="fields" [model]="user"></ui-form>
    </div>
    <div>
      <button mat-raised-button color="accent" [disabled]="!isValid()"  (click)="save()">
        Save
      </button>
      <button mat-raised-button color="accent" [disabled]="!isValid()"  (click)="save(true)">
        Save and close
      </button>
      <button mat-raised-button color="secondary" (click)="close()">
        Close
      </button>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersFormComponent {
  public form = new FormGroup({})
  public fields: any[] = [
    Field.input('id', {
      label: 'ID',
      autocomplete: 'id',
      disabled: true,
    }),
    Field.input('email', {
      label: 'Email',
      autocomplete: 'email',
      disabled: true,
    }),
    Field.input('name', {
      label: 'Name',
      autocomplete: 'name',
      required: true,
    }),
    Field.input('avatar', {
      label: 'Avatar',
      autocomplete: 'avatar',
    }),
    Field.checkbox('active', {
      label: 'User is Active',
    }),
    Field.checkbox('admin', {
      label: 'User is Admin',
    }),
  ]

  @Input() public user: any
  @Output() action = new EventEmitter()

  public save(close = false) {
    const type = close ? 'SAVE_CLOSE' : 'SAVE'
    this.action.emit({ type, payload: this.user })
  }

  close() {
    this.action.emit({ type: 'CLOSE' })
  }

  isValid() {
    const { pristine, valid } = this.form

    return !pristine && valid
  }
}
