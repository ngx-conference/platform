import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileResolver implements Resolve<any> {
  constructor(private auth: AuthService) {}

  resolve() {
    return this.auth.authState$.subscribe(
      res => {
        return res;
      }
    )
  }
}
