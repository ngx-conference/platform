import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Actions, ofActionDispatched, Store } from '@ngxs/store'

import { URL_REDIRECT } from '../../auth.constants'
import { Login, LoginSuccess } from '../../state/auth.actions'

@Component({
  selector: 'auth-login',
  template: `
    <mat-toolbar color="secondary">Login to ngx-conference</mat-toolbar>
    <div style="padding: 50px;">
      <div *ngIf="error">
        <strong>An error occurred.</strong>
        {{error}}
      </div>
      <div class="social-login">
        <button mat-flat-button (click)="login('github')">
          Log in with GitHub
        </button>
      </div>
      <div class="social-login">
        <button mat-flat-button (click)="login('google')">
          Log in with Google
        </button>
      </div>
    </div>
  `,
  styles: [
    `
    .social-login {
      margin: 30px auto;
      width: 250px;
      text-align: center;
    }
  `,
  ],
})
export class AuthLoginComponent implements OnInit {
  private readonly redirectUrl: string
  public error = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
    private actions: Actions,
  ) {
    this.redirectUrl = this.route.snapshot.queryParams['url'] || URL_REDIRECT
  }

  ngOnInit() {
    this.actions
      .pipe(ofActionDispatched(LoginSuccess))
      .subscribe(() => this.redirect())
  }

  redirect() {
    console.log('redirecting to ', this.redirectUrl)
    return this.router.navigate([this.redirectUrl])
  }

  public login(provider) {
    this.store.dispatch(new Login(provider))
  }
}
