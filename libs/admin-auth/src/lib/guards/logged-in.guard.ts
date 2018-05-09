import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router'

import { URL_LOGIN, URL_REDIRECT } from '../auth.constants'
import { AuthService } from '../services/auth.service'
import { map, take, tap } from 'rxjs/internal/operators'

@Injectable({
  providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl = state.url || URL_REDIRECT

    return this.auth.authState$
      .pipe(
        take(1),
        map(authState => !!authState),
        tap(authenticated => {
          if (!authenticated) {
            return this.login(redirectUrl)
          }
        }),
      )
  }

  login(redirectUrl) {
    return this.router.navigate([URL_LOGIN], {
      queryParams: {
        url: redirectUrl,
      },
    })
  }
}
