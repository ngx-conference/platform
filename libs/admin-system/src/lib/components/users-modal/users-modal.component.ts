import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-users-model',
  template: `    
    <app-users-form [isModal]="true"
                       [user]="user"
                       (action)="action.emit($event)">
    </app-users-form>
  `,
  styles: [],
})
export class UsersModalComponent {
  @Input() public user
  @Output() public action = new EventEmitter()
}
