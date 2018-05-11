import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import {AdminSystemRouterModule} from './admin-system-router.module'

import { SidebarComponent } from './components/sidebar/sidebar.component'
import { UserComponent } from './components/user/user.component'
import { UsersFormComponent } from './components/users-form/users-form.component'
import { UsersListComponent } from './components/users-list/users-list.component'
import { UsersModalComponent } from './components/users-modal/users-modal.component'

import { SystemExportComponent } from './containers/system-export/system-export.component'
import { SystemImportComponent } from './containers/system-import/system-import.component'
import { SystemIndexComponent } from './containers/system-index/system-index.component'
import { UsersIndexComponent } from './containers/users-index/users-index.component'

@NgModule({
  imports: [
    AdminCoreModule,
    AdminSystemRouterModule,
  ],
  declarations: [
    SidebarComponent,
    UserComponent,
    UsersFormComponent,
    UsersListComponent,
    UsersModalComponent,
    SystemExportComponent,
    SystemImportComponent,
    SystemIndexComponent,
    UsersIndexComponent,
  ],
})
export class AdminSystemModule {}
