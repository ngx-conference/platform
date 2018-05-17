import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from '@ngx-conference/site-ui'

const routes: Routes = [
  {
    path: '',
    loadChildren: '@ngx-conference/site-conference-picker#SiteConferencePickerModule',
  },
  {
    path: ':id',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '@ngx-conference/site-conference#SiteConferenceModule',
      },
    ],
  },
]
export const AppRoutingModule = RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always',
})
