import { RouterModule, Routes } from '@angular/router'
import {
  AuthModuleRoutes,
  IsActiveGuard,
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
    ],
  },
  {
    path: '',
    children: [...AuthModuleRoutes, ...AdminCoreRoutes],
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
