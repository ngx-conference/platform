import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SystemExportComponent } from './containers/system-export/system-export.component'
import { SystemImportComponent } from './containers/system-import/system-import.component'

const routes: Routes = [

  {
    path: '',
    component: SystemExportComponent,
    children: [],
  },
  {
    path: 'import',
    component: SystemImportComponent,
    children: [],
  },
]

export const SystemExportImportRouterModule: ModuleWithProviders = RouterModule.forChild(routes)
