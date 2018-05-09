import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'

import { AuthIndexComponent } from './containers/auth-index/auth-index.component'
import { AuthLogoutComponent } from './containers/auth-logout/auth-logout.component'
import { AuthLoginComponent } from './containers/auth-login/auth-login.component'
import { AuthProfileComponent } from './containers/auth-profile/auth-profile.component'

import { LoggedInGuard } from './guards/logged-in.guard'
import { ProfileResolver } from './resolvers/profile.resolver'
import { AdminCoreModule } from '@ngx-conference/admin-core'

export const AuthModuleRoutes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  {
    path: '',
    component: AuthIndexComponent,
    resolve: { authState: ProfileResolver },
    children: [
      { path: 'login', component: AuthLoginComponent },
      { path: 'logout', component: AuthLogoutComponent },
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
  declarations: [AuthIndexComponent, AuthLogoutComponent, AuthLoginComponent, AuthProfileComponent],
})
export class AdminAuthModule {}
