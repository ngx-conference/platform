import { Location } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { SystemUser } from '../../models/system-user'
import { SystemUserService } from '../../services/system-user.service'

@Component({
  selector: 'system-user-index',
  template: `
    <mat-card class="form">
      <mat-card-content>
        <ui-loading *ngIf="!user"></ui-loading>
        <system-user-form *ngIf="user" [user]="user" (action)="handleAction($event)">
        </system-user-form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .form {
      padding: 30px;
    }
  `]
})
export class UserEditComponent implements OnInit {

  public user: SystemUser

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    public service: SystemUserService,
  ) {}

  ngOnInit() {
    this.service.crud.getItem(this.route.snapshot.paramMap.get('id'))
      .subscribe(res => this.user = res)
  }

  back() {
    this.location.back()
  }

  handleAction({ type, payload }) {
    switch (type) {
      case 'DELETE':
        return this.service.crud.deleteItem(payload)
      case 'CLOSE':
        return this.back()
      case 'SAVE_CLOSE':
      case 'SAVE':
        return this.service
          .crud
          .upsertItem(payload)
          .subscribe(
            () => type === 'SAVE_CLOSE' && this.back(),
            err => console.log('err', err),
          )
      default:
        console.log(`Unknown type: ${type}. Payload: `, payload)
    }
  }
}
