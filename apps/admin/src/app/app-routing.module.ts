import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from '@ngx-conference/admin-ui'

// import { AdminDashboardModule } from '@ngx-conference/admin-dashboard'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: '@ngx-conference/admin-dashboard#AdminDashboardModule',
      },
    ],
  },
]
export const AppRoutingModule = RouterModule.forRoot(routes)
