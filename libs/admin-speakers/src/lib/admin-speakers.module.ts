import { NgModule } from '@angular/core'

import { AdminSharedModule } from '@ngx-conference/admin-shared'

import { AdminSpeakersRoutingModule } from './admin-speakers-routing.module'

import { SpeakersIndexComponent } from './containers/speakers-index/speakers-index.component'

@NgModule({
  imports: [AdminSharedModule, AdminSpeakersRoutingModule],
  declarations: [SpeakersIndexComponent],
})
export class AdminSpeakersModule {}
