import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import { AdminSystemRouterModule } from './admin-system-router.module'

import { SystemIndexComponent } from './containers/system-index/system-index.component'

@NgModule({
  imports: [AdminCoreModule, AdminSystemRouterModule],
  declarations: [SystemIndexComponent],
})
export class AdminSystemModule {}
