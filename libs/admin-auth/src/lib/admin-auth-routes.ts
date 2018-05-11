import { Routes } from '@angular/router'

import { AuthIndexComponent } from './containers/auth-index/auth-index.component'
import { AuthLogoutComponent } from './containers/auth-logout/auth-logout.component'
import { AuthLoginComponent } from './containers/auth-login/auth-login.component'
import { AuthProfileComponent } from './containers/auth-profile/auth-profile.component'

import { RequestAccessComponent } from './containers/request-access/request-access.component'

import { LoggedInGuard } from './guards/logged-in.guard'
import { ProfileResolver } from './resolvers/profile.resolver'

export const AdminAuthRoutes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: '',
    component: AuthIndexComponent,
    resolve: { authState: ProfileResolver },
    children: [
      { path: 'login', component: AuthLoginComponent },
      { path: 'logout', component: AuthLogoutComponent },
      { path: 'request-access', component: RequestAccessComponent },
      {
        path: 'profile',
        component: AuthProfileComponent,
        canActivate: [LoggedInGuard],
      },
    ],
  },
]
