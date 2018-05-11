import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CrudComponent, LayoutBasicComponent, LayoutComponent } from '@ngx-conference/admin-ui'

import { ConferenceResolver } from './resolver/conference.resolver'
import { ConferenceUiResolver } from './resolver/conference-ui.resolver'
import { DbResolver } from './resolver/db.resolver'

import { ConferenceDashboardComponent } from './containers/conference-dashboard/conference-dashboard.component'
import { ConferenceImagesComponent } from './containers/conference-images/conference-images.component'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component'
import { ConferenceSettingsComponent } from './containers/conference-settings/conference-settings.component'
import { ConferenceWizardComponent } from './containers/conference-wizard/conference-wizard.component'

import { CrudSpeaker } from './models/crud-speaker'
import { CrudSponsor } from './models/crud-sponsor'
import { CrudTalk } from './models/crud-talk'

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      {
        path: 'add',
        component: ConferenceWizardComponent,
      },
      {
        path: '',
        component: ConferenceIndexComponent,
      },
    ],
  },
  {
    path: ':id',
    resolve: {
      conference: ConferenceResolver,
    },
    children: [
      {
        path: '',
        component: LayoutComponent,
        resolve: {
          db: DbResolver,
          ui: ConferenceUiResolver,
          parent: ConferenceResolver,
        },
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'dashboard',
          },
          {
            path: 'dashboard',
            component: ConferenceDashboardComponent,
          },
          {
            path: 'speakers',
            component: CrudComponent,
            data: {
              crud: CrudSpeaker,
            },
          },
          {
            path: 'sponsors',
            component: CrudComponent,
            data: {
              crud: CrudSponsor,
            },
          },
          {
            path: 'talks',
            component: CrudComponent,
            data: {
              crud: CrudTalk,
            },
          },
          {
            path: 'images',
            component: ConferenceImagesComponent,
          },
          {
            path: 'settings',
            component: ConferenceSettingsComponent,
          },
        ],
      },
    ],
  },
]

export const AdminConferenceRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
