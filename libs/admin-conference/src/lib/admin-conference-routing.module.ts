import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { CrudComponent, LayoutBasicComponent, LayoutComponent } from '@ngx-conference/admin-ui'

import { ConferenceResolver } from './resolver/conference.resolver'

import { ConferenceUiResolver } from './resolver/conference-ui.resolver'
import { SpeakerCrudResolver } from './resolver/speaker-crud.resolver'
import { SponsorCrudResolver } from './resolver/sponsor-crud.resolver'
import { TalksCrudResolver } from './resolver/talks-crud.resolver'

import { ConferenceDashboardComponent } from './containers/conference-dashboard/conference-dashboard.component'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component'
import { ConferenceWizardComponent } from './containers/conference-wizard/conference-wizard.component'

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
    ]
  },
  {
    path: ':id',
    component: LayoutComponent,
    resolve: {
      conference: ConferenceResolver,
      ui: ConferenceUiResolver,
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
        resolve: {
          service: SpeakerCrudResolver,
        },
      },
      {
        path: 'sponsors',
        component: CrudComponent,
        resolve: {
          service: SponsorCrudResolver,
        },
      },
      {
        path: 'talks',
        component: CrudComponent,
        resolve: {
          service: TalksCrudResolver,
        },
      },
    ],
  },
]

export const AdminConferenceRoutingModule: ModuleWithProviders  = RouterModule.forChild(routes)
