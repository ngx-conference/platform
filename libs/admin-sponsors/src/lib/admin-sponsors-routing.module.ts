import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { SponsorsIndexComponent } from './containers/sponsors-index/sponsors-index.component'

const routes: Routes = [
  {
    path: '',
    component: SponsorsIndexComponent,
  },
]

export const AdminSponsorsRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes,
)
