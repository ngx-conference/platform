import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service'
import { URL_LOGIN } from '../../auth.constants'

@Component({
  selector: 'auth-logout',
  template: `
    {{ loggedOut ? 'Logged out' : 'Logging out' }}
  `,
})
export class AuthLogoutComponent implements OnInit {
  public loggedOut = false
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.logout().subscribe(() => {
      this.loggedOut = !this.loggedOut
      this.router.navigate([URL_LOGIN])
    })
  }
}
