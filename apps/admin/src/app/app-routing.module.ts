import { RouterModule, Routes } from '@angular/router'
import {
  AdminAuthRoutes,
  IsActiveGuard,
  IsAdminGuard,
  LoggedInGuard,
  ProfileResolver,
} from '@ngx-conference/admin-auth'
import { AdminCoreRoutes } from '@ngx-conference/admin-core'
import { LayoutComponent } from '@ngx-conference/admin-ui'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/conferences',
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LoggedInGuard, IsActiveGuard],
    resolve: { profile: ProfileResolver },
    children: [
      {
        path: 'conferences',
        loadChildren: '@ngx-conference/admin-conference#AdminConferenceModule',
      },
      {
        path: '',
        canActivate: [IsAdminGuard],
        children: [
          {
            path: 'system',
            loadChildren: '@ngx-conference/admin-system#AdminSystemModule',
          },
        ],
      },
    ],
  },
  {
    path: '',
    children: [...AdminAuthRoutes, ...AdminCoreRoutes],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/not-found',
  },
]
export const AppRoutingModule = RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always',
})
