import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { Store } from '@ngxs/store'

import { URL_LOGIN, URL_REDIRECT } from '../auth.constants'
import { AuthState } from '../state/auth.state'

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = state.url || URL_REDIRECT
    const loggedIn = this.store.selectSnapshot(AuthState.loggedIn)

    console.log('loggedIn', loggedIn)
    return loggedIn ? loggedIn : this.login(redirectUrl)
  }

  login(redirectUrl) {
    return this.router.navigate([URL_LOGIN], {
      queryParams: {
        url: redirectUrl,
      },
    })
  }
}
