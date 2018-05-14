import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LogoutSuccess } from '../../state/auth.actions'
import { Actions, ofActionDispatched } from '@ngxs/store'

import { AuthService } from '../../services/auth.service'
import { URL_LOGIN } from '../../auth.constants'

@Component({
  selector: 'auth-logout',
  template: `
    Logging out...
  `,
})
export class AuthLogoutComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router, private actions: Actions) {}

  redirect() {
    this.router.navigate([URL_LOGIN])
  }

  ngOnInit() {
    this.auth.logout().subscribe()
    this.actions
      .pipe(ofActionDispatched(LogoutSuccess))
      .subscribe(() => {
        console.log('logoutSuccesss')
        this.redirect()
      })
  }
}
