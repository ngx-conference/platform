import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FormsModule } from './forms/forms.module'
import { AdminUiMaterialModule } from './admin-ui-material.module'

import { LayoutComponent } from './containers/layout/layout.component'

import { AvatarComponent } from './components/avatar/avatar.component'
import { CrudListComponent } from './components/crud-list/crud-list.component'
import { CrudModalComponent } from './components/crud-modal/crud-modal.component'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { PageComponent } from './components/page/page.component'
import { PageTitleComponent } from './components/page-title/page-title.component'
import { CrudComponent } from '@ngx-conference/admin-ui/src/lib/components/crud/crud.component'

const exportedComponents = [
  AvatarComponent,
  CrudComponent,
  CrudListComponent,
  CrudModalComponent,
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
  entryComponents: [CrudModalComponent]
})
export class AdminUiModule {}
