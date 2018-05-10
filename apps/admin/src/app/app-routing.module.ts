import { RouterModule, Routes } from '@angular/router'
import {
  AuthModuleRoutes,
  LoggedInGuard,
  ProfileResolver,
} from '@ngx-conference/admin-auth'

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/conferences',
  },
  {
    path: '',
    canActivate: [LoggedInGuard],
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
    children: [...AuthModuleRoutes],
  },
]
export const AppRoutingModule = RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })
