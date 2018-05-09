import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminCoreModule } from '@ngx-conference/admin-core'
import { CrudComponent } from '@ngx-conference/admin-ui'

import { TalksServiceResolver } from './resolvers/talks-service.resolver'

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    resolve: {
      service: TalksServiceResolver,
    },
  },
]

@NgModule({
  imports: [AdminCoreModule, RouterModule.forChild(routes)],
})
export class AdminTalksModule {}
