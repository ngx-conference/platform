import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-users-form',
  template: `

    <div [class.card]="!isModal">
      <div [class.card-header]="!isModal"
           [class.modal-header]="isModal">
        {{ editMode ? 'Edit' : 'Add' }} user

        <button class="close pull-right"
                *ngIf="isModal"
                (click)="cancel()">
          <span>&times;</span>
        </button>

      </div>
      <div [class.card-body]="!isModal"
           [class.modal-body]="isModal">

        <div class="form-group">
          <label for="id">id</label>
          <input class="form-control" required type="text" id="id"
                 [(ngModel)]="user.id" name="id" placeholder="id">
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" required type="text" id="name"
                 [(ngModel)]="user.name" name="name" placeholder="Name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input class="form-control" required type="text" id="email"
                 [(ngModel)]="user.email" name="email" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="avatar">Avatar</label>
          <input class="form-control" required type="text" id="avatar"
                 [(ngModel)]="user.avatar" name="avatar" placeholder="Avatar">
        </div>

        <div class="form-group">
          <label for="type">Admin</label>
          <select class="form-control" name="type"
                  [(ngModel)]="user.admin">
            <option [value]="true">True</option>
            <option [value]="false">False</option>
          </select>
        </div>
        <div class="form-group">
          <label for="type">Active</label>
          <select class="form-control" name="type"
                  [(ngModel)]="user.active">
            <option [value]="true">True</option>
            <option [value]="false">False</option>
          </select>
        </div>

      </div>
      <div [class.card-footer]="!isModal"
           [class.modal-footer]="isModal">
        <button class="btn btn-outline-primary"
                (click)="save()">
          Save
        </button>
        <button class="btn btn-outline-primary"
                (click)="save(true)">
          Save and close
        </button>
        <button class="btn btn-outline-secondary float-right"
                (click)="cancel()">
          Close
        </button>
      </div>
    </div>
  `,
  styles: [],
})
export class UsersFormComponent implements OnInit {
  private initialUser
  @Input() public types = ['string', 'number', 'boolean', 'object', 'array']
  @Input() public user: any
  @Input() public isModal = false
  @Input() public editMode: boolean
  @Output() action = new EventEmitter()

  ngOnInit() {
    this.initialUser = Object.assign({}, this.user)
    this.editMode = this.editMode || !!this.user.id
  }

  public save(close = false) {
    if (!this.user.id) {
      return alert('Please enter a user ID')
    }
    const type = close ? 'SAVE_CLOSE' : 'SAVE'
    this.action.emit({ type, payload: this.user })
    if (!this.editMode) {
      this.user = Object.assign({}, this.initialUser)
    }
  }

  cancel() {
    this.action.emit({ type: 'CANCEL' })
  }
}
