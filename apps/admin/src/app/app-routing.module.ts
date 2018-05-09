import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from '@ngx-conference/admin-ui'
import {
  AuthModuleRoutes,
  LoggedInGuard,
  ProfileResolver,
} from '@ngx-conference/admin-auth'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoggedInGuard],
    resolve: { profile: ProfileResolver },
    children: [
      {
        path: 'dashboard',
        loadChildren: '@ngx-conference/admin-dashboard#AdminDashboardModule',
      },
      {
        path: 'speakers',
        loadChildren: '@ngx-conference/admin-speakers#AdminSpeakersModule',
      },
      {
        path: 'sponsors',
        loadChildren: '@ngx-conference/admin-sponsors#AdminSponsorsModule',
      },
      {
        path: 'talks',
        loadChildren: '@ngx-conference/admin-talks#AdminTalksModule',
      },
    ],
  },
  {
    path: '',
    children: [...AuthModuleRoutes],
  },
]
export const AppRoutingModule = RouterModule.forRoot(routes)
