import { NgModule } from '@angular/core'

import { AdminSharedModule } from '@ngx-conference/admin-shared'

import { AdminTalksRoutingModule } from './admin-talks-routing.module'

import { TalksIndexComponent } from './containers/talks-index/talks-index.component';
import { TalkModalComponent } from './components/talk-modal/talk-modal.component'

@NgModule({
  imports: [AdminSharedModule, AdminTalksRoutingModule],
  declarations: [TalksIndexComponent, TalkModalComponent],
  entryComponents: [TalkModalComponent],
})
export class AdminTalksModule {}
