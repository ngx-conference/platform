import { AuthUser } from './auth.state'

export class Login {
  static readonly type = '[Auth] Login'
  constructor(public provider: 'github' | 'google') {}
}

export class LoginSuccess {
  static readonly type = '[Auth] Login Success'
  constructor(public user: AuthUser) {}
}

export class Logout {
  static readonly type = '[Auth] Logout'
}

export class LogoutSuccess {
  static readonly type = '[Auth] Logout Success'
}
