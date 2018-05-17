import { ModuleWithProviders } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ConferenceResolver } from './resolvers/conference.resolver'
import { ScheduleResolver } from './resolvers/schedule.resolver'
import { SessionsResolver } from './resolvers/sessions.resolver'
import { SpeakersResolver } from './resolvers/speakers.resolver'
import { SponsorsResolver } from './resolvers/sponsors.resolver'

import { ConferenceHomeComponent } from './containers/conference-home/conference-home.component'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component'

import { ScheduleIndexComponent } from './containers/schedule-index/schedule-index.component'
import { SessionIndexComponent } from './containers/session-index/session-index.component'
import { SpeakerIndexComponent } from './containers/speaker-index/speaker-index.component'
import { SponsorIndexComponent } from './containers/sponsor-index/sponsor-index.component'

const routes: Routes = [
  {
    path: '',
    resolve: { conference: ConferenceResolver },
    component: ConferenceIndexComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        component: ConferenceHomeComponent,
      },
      {
        path: 'schedule',
        resolve: { schedule: ScheduleResolver },
        component: ScheduleIndexComponent,
      },
      {
        path: 'sessions',
        resolve: { sessions: SessionsResolver },
        component: SessionIndexComponent,
      },
      {
        path: 'speakers',
        resolve: { speakers: SpeakersResolver },
        component: SpeakerIndexComponent,
      },
      {
        path: 'sponsors',
        resolve: { sponsors: SponsorsResolver },
        component: SponsorIndexComponent,
      },
    ],
  },
]

export const SiteConferenceRoutingModule: ModuleWithProviders = RouterModule.forChild(
  routes,
)
