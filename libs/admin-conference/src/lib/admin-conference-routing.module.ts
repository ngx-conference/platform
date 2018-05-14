import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CrudComponent } from '@ngx-conference/admin-ui'

import { ConferenceResolver } from './resolver/conference.resolver'
import { DbResolver } from './resolver/db.resolver'

import { ConferenceDashboardComponent } from './containers/conference-dashboard/conference-dashboard.component'
import { ConferenceImagesComponent } from './containers/conference-images/conference-images.component'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component'
import { ConferenceSettingsComponent } from './containers/conference-settings/conference-settings.component'
import { ConferenceViewComponent } from './containers/conference-view/conference-view.component'
import { ConferenceWizardComponent } from './containers/conference-wizard/conference-wizard.component'

import { CrudSpeaker } from './models/crud-speaker'
import { CrudSponsor } from './models/crud-sponsor'
import { CrudTalk } from './models/crud-talk'

const routes: Routes = [
  {
    path: 'add',
    component: ConferenceWizardComponent,
  },
  {
    path: '',
    component: ConferenceIndexComponent,
  },
  {
    path: ':id',
    component: ConferenceViewComponent,
    resolve: {
      conference: ConferenceResolver,
    },
    children: [
      {
        path: '',
        resolve: {
          db: DbResolver,
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
