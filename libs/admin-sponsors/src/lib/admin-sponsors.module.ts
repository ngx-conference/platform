import { NgModule } from '@angular/core'

import { AdminSharedModule } from '@ngx-conference/admin-shared'

import { AdminSponsorsRoutingModule } from './admin-sponsors-routing.module'

import { SponsorsIndexComponent } from './containers/sponsors-index/sponsors-index.component'

@NgModule({
  imports: [AdminSharedModule, AdminSponsorsRoutingModule],
  declarations: [SponsorsIndexComponent],
})
export class AdminSponsorsModule {}
