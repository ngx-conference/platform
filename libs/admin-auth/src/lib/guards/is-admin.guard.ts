import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { tap } from 'rxjs/operators'

import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {
  constructor(
    private store: Store,
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate() {
    return this.store.select(state => state.auth.user.admin).pipe(
      tap(isActive => {
        if (!isActive) {
          return this.router.navigate([`/401`])
        }
      }),
    )
  }
}
