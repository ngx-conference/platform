import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import { SystemUserRouterModule } from './system-user-router.module'

import { UserComponent } from './components/user/user.component'
import { UsersFormComponent } from './components/users-form/users-form.component'
import { UsersListComponent } from './components/users-list/users-list.component'

import { UserEditComponent } from './containers/user-edit/user-edit.component'
import { UserIndexComponent } from './containers/user-index/user-index.component'

@NgModule({
  imports: [
    AdminCoreModule,
    SystemUserRouterModule,
  ],
  declarations: [
    UserComponent,
    UserEditComponent,
    UserIndexComponent,
    UsersFormComponent,
    UsersListComponent,
  ],
})
export class SystemUserModule {}
