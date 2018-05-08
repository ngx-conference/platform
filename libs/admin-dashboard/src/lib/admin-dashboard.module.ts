import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { DashboardIndexComponent } from './containers/dashboard-index/dashboard-index.component'
import { AdminSharedModule } from '@ngx-conference/admin-shared'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardIndexComponent },
]

@NgModule({
  imports: [AdminSharedModule, RouterModule.forChild(routes)],
  declarations: [DashboardIndexComponent],
})
export class AdminDashboardModule {}
