import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AdminUiModule } from '@ngx-conference/admin-ui'

const sharedModules = [CommonModule, RouterModule, AdminUiModule]

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class AdminCoreModule {}
