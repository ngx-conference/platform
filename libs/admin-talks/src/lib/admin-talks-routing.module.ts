import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { TalksIndexComponent } from './containers/talks-index/talks-index.component'
import { TalksTableComponent } from './containers/talks-table/talks-table.component'

const routes: Routes = [
  {
    path: '',
    component: TalksIndexComponent,
  },
  {
    path: 'table',
    component: TalksTableComponent,
  },
]

export const AdminTalksRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes,
)
