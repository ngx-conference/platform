import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SystemIndexComponent } from './containers/system-index/system-index.component'

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: '',
    component: SystemIndexComponent,
    children: [
      {
        path: 'export-import',
        loadChildren: './modules/export-import/system-export-import.module#SystemExportImportModule'
      },
      {
        path: 'users',
        loadChildren: './modules/user/system-user.module#SystemUserModule'
      },
    ],
  },
]

export const AdminSystemRouterModule: ModuleWithProviders = RouterModule.forChild(routes)
