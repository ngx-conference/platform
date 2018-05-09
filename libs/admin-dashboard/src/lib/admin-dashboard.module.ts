import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardIndexComponent } from './containers/dashboard-index/dashboard-index.component'
import { AdminCoreModule } from '@ngx-conference/admin-core'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardIndexComponent },
]

@NgModule({
  imports: [AdminCoreModule, RouterModule.forChild(routes)],
  declarations: [DashboardIndexComponent],
})
export class AdminDashboardModule {}
