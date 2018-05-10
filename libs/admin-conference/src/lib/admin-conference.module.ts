import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import { AdminConferenceRoutingModule } from './admin-conference-routing.module'

import { IconTalkComponent } from './components/icon-talk/icon-talk.component'
import { IconSponsorComponent } from './components/icon-sponsor/icon-sponsor.component'
import { IconSpeakerComponent } from './components/icon-speaker/icon-speaker.component'

import { ConferenceDashboardComponent } from './containers/conference-dashboard/conference-dashboard.component'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component'
import { ConferenceSettingsComponent } from './containers/conference-settings/conference-settings.component'
import { ConferenceSidebarComponent } from './components/conference-sidebar/conference-sidebar.component';
import { ConferenceWizardComponent } from './containers/conference-wizard/conference-wizard.component'

@NgModule({
  imports: [
    AdminCoreModule,
    AdminConferenceRoutingModule,
  ],
  declarations: [
    ConferenceDashboardComponent,
    ConferenceIndexComponent,
    ConferenceSettingsComponent,
    ConferenceSidebarComponent,
    ConferenceWizardComponent,
    IconSpeakerComponent,
    IconSponsorComponent,
    IconTalkComponent,
  ],
  entryComponents: [
    IconSpeakerComponent,
    IconSponsorComponent,
    IconTalkComponent,
  ]
})
export class AdminConferenceModule {
}
