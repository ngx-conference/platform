import { Component } from '@angular/core'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'auth-request-access',
  template: `
    <mat-toolbar color="secondary">Request access to ngx-conference</mat-toolbar>
    <div class="block">
      <div *ngIf="user; else loading">
        <div *ngIf="user.requestAccess; else requestButton">
          <button mat-flat-button color="accent">
            You have requested access at {{user.requestAccess | date: 'short' }}
          </button>
        </div>
        <ng-template #requestButton>
          <button mat-flat-button (click)="request()">
            Request access to ngx-conference
          </button>
        </ng-template>
      </div>
      <ng-template #loading>
        <button mat-flat-button disabled>
          Checking request status...
        </button>
      </ng-template>
      <div class="block">
        <button mat-flat-button routerLink="/logout">
          Log out...
        </button>
      </div>
    </div>
  `,
  styles: [`
    .block {
      margin: 100px auto;
      width: 400px;
      text-align: center
    }
  `],
})
export class RequestAccessComponent {
  public user
  constructor(private auth: AuthService) {
    this.auth.user$.subscribe(user => (this.user = user))
  }

  request() {
    this.auth.requestAccess(this.user.id).subscribe()
  }
}
