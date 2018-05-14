import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import { SystemExportComponent } from './containers/system-export/system-export.component'
import { SystemImportComponent } from './containers/system-import/system-import.component'

import { SystemExportImportRouterModule } from './system-export-import-router.module'


@NgModule({
  imports: [
    AdminCoreModule,
    SystemExportImportRouterModule,
  ],
  declarations: [
    SystemExportComponent,
    SystemImportComponent,
  ],
})
export class SystemExportImportModule {}
