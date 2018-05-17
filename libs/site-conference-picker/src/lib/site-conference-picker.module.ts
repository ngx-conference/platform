import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SiteUiModule } from '@ngx-conference/site-ui'

import { ConferencePickerComponent } from './containers/conference-picker/conference-picker.component'
import { SiteConferencePickerRoutingModule } from './site-conference-picker-routing.module'

@NgModule({
  imports: [CommonModule, SiteUiModule, SiteConferencePickerRoutingModule],
  declarations: [ConferencePickerComponent],
})
export class SiteConferencePickerModule {}
