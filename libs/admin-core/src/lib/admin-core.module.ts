import { NgModule } from '@angular/core'

import { AdminUiModule } from '@ngx-conference/admin-ui';
import { NotFoundComponent } from './components/not-found/not-found.component'

const sharedModules = [
  AdminUiModule
]

@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules],
  declarations: [NotFoundComponent],
})
export class AdminCoreModule {}
