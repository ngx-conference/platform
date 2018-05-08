import { RouterModule, Routes } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { SpeakersIndexComponent } from './containers/speakers-index/speakers-index.component'

const routes: Routes = [
  {
    path: '',
    component: SpeakersIndexComponent,
  },
]

export const AdminSpeakersRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes,
)
