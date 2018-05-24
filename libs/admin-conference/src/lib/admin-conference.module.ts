import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

import { AdminConferenceRoutingModule } from './admin-conference-routing.module'

import { IconSessionComponent } from './components/icon-session/icon-session.component'
import { IconSponsorComponent } from './components/icon-sponsor/icon-sponsor.component'
import { IconSpeakerComponent } from './components/icon-speaker/icon-speaker.component'
import { ImageUploadComponent } from './components/image-upload/image-upload.component'

import { ConferenceDashboardComponent } from './containers/conference-dashboard/conference-dashboard.component'
import { ConferenceImagesComponent } from './containers/conference-images/conference-images.component'
import { ConferenceIndexComponent } from './containers/conference-index/conference-index.component'
import { ConferenceSettingsDatesComponent } from './containers/conference-settings-dates/conference-settings-dates.component'
import { ConferenceSettingsGeneralComponent } from './containers/conference-settings-general/conference-settings-general.component';
import { ConferenceSettingsUsersComponent } from './containers/conference-settings-users/conference-settings-users.component'
import { ConferenceViewComponent } from './containers/conference-view/conference-view.component'
import { ConferenceWizardComponent } from './containers/conference-wizard/conference-wizard.component'

import { ImageDropDirective } from './directives/image-drop.directive';
import { FileSizePipe } from './pipes/file-size.pipe';
import { ConferenceScheduleComponent } from './containers/conference-schedule/conference-schedule.component';
import { ConferenceDayComponent } from './containers/conference-day/conference-day.component';

@NgModule({
  imports: [
    AdminCoreModule,
    AdminConferenceRoutingModule,
  ],
  declarations: [
    ConferenceDashboardComponent,
    ConferenceIndexComponent,
    ConferenceSettingsDatesComponent,
    ConferenceSettingsGeneralComponent,
    ConferenceSettingsUsersComponent,
    ConferenceViewComponent,
    ConferenceWizardComponent,
    IconSpeakerComponent,
    IconSponsorComponent,
    IconSessionComponent,
    ConferenceImagesComponent,
    ImageUploadComponent,
    ImageDropDirective,
    FileSizePipe,
    ConferenceScheduleComponent,
    ConferenceDayComponent,
  ],
  entryComponents: [
    IconSpeakerComponent,
    IconSponsorComponent,
    IconSessionComponent,
  ],
})
export class AdminConferenceModule {
}
