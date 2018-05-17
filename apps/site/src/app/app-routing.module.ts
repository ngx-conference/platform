import { RouterModule, Routes } from '@angular/router'

import { LayoutComponent } from '@ngx-conference/site-ui'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: '@ngx-conference/site-conference#SiteConferenceModule',
      },
    ],
  },
  {
    path: 'picker',
    loadChildren: '@ngx-conference/site-conference-picker#SiteConferencePickerModule',
  },
]
export const AppRoutingModule = RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always',
})
