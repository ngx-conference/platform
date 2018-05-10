import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'

import { AdminCoreModule } from '@ngx-conference/admin-core';

import { AuthIndexComponent } from './containers/auth-index/auth-index.component'
import { AuthLogoutComponent } from './containers/auth-logout/auth-logout.component'
import { AuthLoginComponent } from './containers/auth-login/auth-login.component'
import { AuthProfileComponent } from './containers/auth-profile/auth-profile.component'

import { RequestAccessComponent } from './containers/request-access/request-access.component'

import { LoggedInGuard } from './guards/logged-in.guard'
import { ProfileResolver } from './resolvers/profile.resolver'

export const AuthModuleRoutes: Routes = [
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
@NgModule({
  imports: [
    AdminCoreModule,
  ],
  declarations: [AuthIndexComponent, AuthLogoutComponent, AuthLoginComponent, AuthProfileComponent, RequestAccessComponent],
})
export class AdminAuthModule {}
