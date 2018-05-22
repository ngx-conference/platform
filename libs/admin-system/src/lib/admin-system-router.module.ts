import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TabsLayoutComponent } from '@ngx-conference/admin-ui'

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: '',
    component: TabsLayoutComponent,
    data: {
      title: 'System',
      icon: 'settings',
      tabs: [
        {
          label: 'Users',
          link: [ 'users' ],
          icon: 'people_outline',
        },
        {
          label: 'Export & Import',
          link: [ 'export-import' ],
          icon: 'cloud_upload',
        }
      ]
    },
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
