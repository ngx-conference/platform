import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FormsModule } from './forms/forms.module'
import { AdminUiMaterialModule } from './admin-ui-material.module'

import { LayoutComponent } from './containers/layout/layout.component'
import { LayoutBasicComponent } from './containers/layout-basic/layout-basic.component'

import { AvatarComponent } from './components/avatar/avatar.component'
import { CrudComponent } from './components/crud/crud.component'
import { CrudIconComponent } from './components/crud-icon/crud-icon.component'
import { CrudListComponent } from './components/crud-list/crud-list.component'
import { CrudModalComponent } from './components/crud-modal/crud-modal.component'
import { FooterComponent } from './components/footer/footer.component'
import { GridTileComponent } from './components/grid-tile/grid-tile.component'
import { HeaderComponent } from './components/header/header.component'
import { LoadingComponent } from './components/loading/loading.component'
import { PageComponent } from './components/page/page.component'
import { PageTitleComponent } from './components/page-title/page-title.component'
import { WizardComponent } from './components/wizard/wizard.component'

const exportedComponents = [
  AvatarComponent,
  CrudComponent,
  CrudIconComponent,
  CrudListComponent,
  CrudModalComponent,
  GridTileComponent,
  LayoutComponent,
  LayoutBasicComponent,
  LoadingComponent,
  PageComponent,
  PageTitleComponent,
  WizardComponent,
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
