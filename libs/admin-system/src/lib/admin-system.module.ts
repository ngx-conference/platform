import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import { AdminSystemRouterModule } from './admin-system-router.module'

@NgModule({
  imports: [AdminCoreModule, AdminSystemRouterModule],
})
export class AdminSystemModule {}
