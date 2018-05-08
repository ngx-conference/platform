import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUiModule } from '@ngx-conference/admin-ui'

const sharedModules = [
  CommonModule,
  AdminUiModule,
]

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class AdminSharedModule {}
