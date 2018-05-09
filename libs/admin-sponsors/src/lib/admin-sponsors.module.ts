import { NgModule } from '@angular/core'

import { AdminCoreModule } from '@ngx-conference/admin-core'

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
  imports: [AdminCoreModule, RouterModule.forChild(routes)],
})
export class AdminSponsorsModule {
}
