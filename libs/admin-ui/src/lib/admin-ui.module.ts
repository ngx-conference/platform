import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AdminUiMaterialModule } from './admin-ui-material.module'

import { LayoutComponent } from './containers/layout/layout.component'

import { AvatarComponent } from './components/avatar/avatar.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { PageComponent } from './components/page/page.component'
import { PageTitleComponent } from './components/page-title/page-title.component'

const exportedComponents = [
  AvatarComponent,
  LayoutComponent,
  PageComponent,
  PageTitleComponent,
]

const internalComponents = [
  FooterComponent,
  HeaderComponent,
]

const exportedModules = [
  FormsModule,
  AdminUiMaterialModule,
]

@NgModule({
  imports: [CommonModule, RouterModule, ...exportedModules],
  declarations: [...exportedComponents, ...internalComponents],
  exports: [...exportedComponents, ...exportedModules],
})
export class AdminUiModule {}
