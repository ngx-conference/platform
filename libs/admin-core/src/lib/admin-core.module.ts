import { NgModule } from '@angular/core'

import { AdminUiModule } from '@ngx-conference/admin-ui'

const sharedModules = [
  AdminUiModule
]

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class AdminCoreModule {}
