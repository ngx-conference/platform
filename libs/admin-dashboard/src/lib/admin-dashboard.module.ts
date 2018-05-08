import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { DashboardIndexComponent } from './containers/dashboard-index/dashboard-index.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component: DashboardIndexComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [DashboardIndexComponent],
})
export class AdminDashboardModule {}
