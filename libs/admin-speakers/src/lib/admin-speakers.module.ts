import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AdminSharedModule } from '@ngx-conference/admin-shared'
import { CrudComponent } from '@ngx-conference/admin-ui'

import { SpeakerServiceResolver } from './resolvers/speaker-service.resolver'

const routes: Routes = [
  {
    path: '',
    component: CrudComponent,
    resolve: {
      service: SpeakerServiceResolver,
    },
  },
]

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(routes)],
})
export class AdminSpeakersModule {}
