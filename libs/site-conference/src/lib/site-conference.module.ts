import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SiteConferenceRoutingModule } from './site-conference-routing.module'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component';
import { SpeakerIndexComponent } from './containers/speaker-index/speaker-index.component';
import { ConferenceHomeComponent } from './containers/conference-home/conference-home.component';
import { SessionIndexComponent } from './containers/session-index/session-index.component';
import { ScheduleIndexComponent } from './containers/schedule-index/schedule-index.component';
import { SponsorIndexComponent } from './containers/sponsor-index/sponsor-index.component'

@NgModule({
  imports: [CommonModule, SiteConferenceRoutingModule],
  declarations: [ConferenceIndexComponent, SpeakerIndexComponent, ConferenceHomeComponent, SessionIndexComponent, ScheduleIndexComponent, SponsorIndexComponent],
})
export class SiteConferenceModule {}
