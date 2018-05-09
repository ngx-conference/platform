import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'
import { URL_REDIRECT } from '../../auth.constants'

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
  styles: [`
    .social-login {
      margin: 30px auto;
      width: 250px;
      text-align: center;
    }
  `]
})
export class AuthLoginComponent {
  private readonly redirectUrl: string
  public error = null

  constructor(public auth: AuthService, private route: ActivatedRoute, private router: Router) {
    this.redirectUrl = this.route.snapshot.queryParams['url'] || URL_REDIRECT
  }

  redirect() {
    return this.router.navigate([this.redirectUrl])
  }

  public login(provider) {
    console.log(provider)
    this.error = false
    this.auth.login(provider).subscribe(() => this.redirect(), err => {
      console.log(err)
      this.error = err.message
    })
  }
}
