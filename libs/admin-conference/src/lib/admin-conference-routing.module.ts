import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CrudComponent, TabsLayoutComponent } from '@ngx-conference/admin-ui'

import { ConferenceResolver } from './resolver/conference.resolver'
import { DbResolver } from './resolver/db.resolver'

import { ConferenceDashboardComponent } from './containers/conference-dashboard/conference-dashboard.component'
import { ConferenceImagesComponent } from './containers/conference-images/conference-images.component'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component'
import { ConferenceSettingsDatesComponent } from './containers/conference-settings-dates/conference-settings-dates.component'
import { ConferenceSettingsGeneralComponent } from './containers/conference-settings-general/conference-settings-general.component'
import { ConferenceSettingsUsersComponent } from './containers/conference-settings-users/conference-settings-users.component'
import { ConferenceViewComponent } from './containers/conference-view/conference-view.component'
import { ConferenceWizardComponent } from './containers/conference-wizard/conference-wizard.component'

import { CrudSpeaker } from './models/crud-speaker'
import { CrudSponsor } from './models/crud-sponsor'
import { CrudSession } from './models/crud-session'

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
            path: 'sessions',
            component: CrudComponent,
            data: {
              crud: CrudSession,
            },
          },
          {
            path: 'images',
            component: ConferenceImagesComponent,
          },
          {
            path: 'settings',
            component: TabsLayoutComponent,
            data: {
              title: 'Settings',
              icon: 'settings',
              tabs: [
                {
                  label: 'General',
                  link: 'general',
                },
                {
                  label: 'Dates',
                  link: 'dates',
                },
                {
                  label: 'Users',
                  link: 'users',
                },
              ],
            },
            children: [
              { path: '', pathMatch: 'full', redirectTo: 'general' },
              {
                path: 'general',
                component: ConferenceSettingsGeneralComponent,
              },
              {
                path: 'users',
                component: ConferenceSettingsUsersComponent,
              },
              {
                path: 'dates',
                component: ConferenceSettingsDatesComponent,
              },
            ],
          },
        ],
      },
    ],
  },
]

export const AdminConferenceRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
