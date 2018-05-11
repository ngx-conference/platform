import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import { AuthIndexComponent } from './containers/auth-index/auth-index.component'
import { AuthLoginComponent } from './containers/auth-login/auth-login.component'
import { AuthLogoutComponent } from './containers/auth-logout/auth-logout.component'
import { AuthProfileComponent } from './containers/auth-profile/auth-profile.component'

import { RequestAccessComponent } from './containers/request-access/request-access.component'

@NgModule({
  imports: [AdminCoreModule],
  declarations: [
    AuthIndexComponent,
    AuthLogoutComponent,
    AuthLoginComponent,
    AuthProfileComponent,
    RequestAccessComponent,
  ],
})
export class AdminAuthModule {}
