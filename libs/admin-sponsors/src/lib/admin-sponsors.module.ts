import { NgModule } from '@angular/core'

import { AdminSharedModule } from '@ngx-conference/admin-shared'

import { RouterModule, Routes } from '@angular/router'
import { CrudComponent } from '@ngx-conference/admin-ui'

import { SponsorServiceResolver } from './resolvers/sponsor-service.resolver'

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    resolve: {
      service: SponsorServiceResolver,
    },
  },
]

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(routes)],
})
export class AdminSponsorsModule {
}
