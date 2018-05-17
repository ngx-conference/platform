import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ConferencePickerComponent } from './containers/conference-picker/conference-picker.component'

const routes: Routes = [
  {
    path: '',
    component: ConferencePickerComponent,
  },
]

export const SiteConferencePickerRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes,
)
