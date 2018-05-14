import { Router } from '@angular/router'
import { URL_LOGOUT } from '../auth.constants'
import { Action, Selector, State, StateContext } from '@ngxs/store'

import { UiLogout } from '@ngx-conference/admin-ui'

import { AuthService } from '../services/auth.service'
import { Login, LoginSuccess, Logout, LogoutSuccess } from './auth.actions'

export interface AuthUser {
  id: string
  name: string
  email: string
  avatar?: string
  avatarText?: string
  admin?: boolean
  active?: boolean
  requestAccess?: number
}

export interface AuthStateModel {
  loggedIn: boolean
  user?: AuthUser
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    loggedIn: false,
  },
})
export class AuthState {

  @Selector()
  static loggedIn(state: AuthStateModel) {
    return state.loggedIn
  }

  constructor(private authService: AuthService, private router: Router) {}

  @Action(Login)
  login({ setState }: StateContext<AuthStateModel>, { provider }: Login) {
    return this.authService.login(provider)
  }

  @Action(LoginSuccess)
  loginSuccess({ setState }: StateContext<AuthStateModel>, { user }: LoginSuccess) {
    console.log({ loggedIn: true, user })
    return setState({ loggedIn: true, user })
  }

  @Action([Logout, UiLogout])
  logout() {
    return this.router.navigate([URL_LOGOUT])
  }

  @Action(LogoutSuccess)
  logoutSuccess({ setState }: StateContext<AuthStateModel>) {
    return setState({ loggedIn: false })
  }
}
