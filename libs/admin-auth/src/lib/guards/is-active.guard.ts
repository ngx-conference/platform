import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { tap } from 'rxjs/operators'
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root',
})
export class IsActiveGuard implements CanActivate {
  constructor(
    private store: Store,
    private auth: AuthService,
    private router: Router,
  ) {}

  canActivate() {
    return this.store.select(state => state.auth.user.active).pipe(
      tap(isActive => {
        if (!isActive) {
          this.router.navigate([`/request-access`])
        }
      }),
    )
  }
}
