import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { TalksIndexComponent } from './containers/talks-index/talks-index.component'

const routes: Routes = [
  {
    path: '',
    component: TalksIndexComponent,
  },
]

export const AdminTalksRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes,
)
