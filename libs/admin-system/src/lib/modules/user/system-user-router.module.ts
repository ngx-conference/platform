import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { UserEditComponent } from './containers/user-edit/user-edit.component'
import { UserIndexComponent } from './containers/user-index/user-index.component'

const routes: Routes = [
  {
    path: '',
    component: UserIndexComponent,
  },
  {
    path: ':id',
    component: UserEditComponent,
  },
]

export const SystemUserRouterModule: ModuleWithProviders = RouterModule.forChild(routes)
