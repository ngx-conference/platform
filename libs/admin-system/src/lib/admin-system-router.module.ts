import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SystemExportComponent } from './containers/system-export/system-export.component'
import { SystemImportComponent } from './containers/system-import/system-import.component'
import { SystemIndexComponent } from './containers/system-index/system-index.component'
import { UsersIndexComponent } from './containers/users-index/users-index.component'

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: '',
    component: SystemIndexComponent,
    children: [
      {
        path: 'users',
        component: UsersIndexComponent,
        children: [],
      },
      {
        path: 'export',
        component: SystemExportComponent,
        children: [],
      },
      {
        path: 'import',
        component: SystemImportComponent,
        children: [],
      },
    ],
  },
]

export const AdminSystemRouterModule: ModuleWithProviders = RouterModule.forChild(routes)
