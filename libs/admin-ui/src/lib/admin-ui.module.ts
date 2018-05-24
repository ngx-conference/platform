import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { RouterModule } from '@angular/router'
import { CalendarDayComponent } from '@ngx-conference/admin-ui/src/lib/components/calendar-day/calendar-day.component'
import { CalendarModule } from 'angular-calendar'

import { FormsModule } from './forms/forms.module'
import { AdminUiMaterialModule } from './admin-ui-material.module'

import { LayoutComponent } from './containers/layout/layout.component'
import { TabsLayoutComponent } from './containers/tabs-layout/tabs-layout.component'

import { AvatarComponent } from './components/avatar/avatar.component'
import { CrudComponent } from './components/crud/crud.component'
import { CrudIconComponent } from './components/crud-icon/crud-icon.component'
import { CrudListComponent } from './components/crud-list/crud-list.component'
import { CrudModalComponent } from './components/crud-modal/crud-modal.component'
import { GridTileComponent } from './components/grid-tile/grid-tile.component'
import { HeaderComponent } from './components/header/header.component'
import { LoadingComponent } from './components/loading/loading.component'
import { PageComponent } from './components/page/page.component'
import { PageTitleComponent } from './components/page-title/page-title.component'
import { WizardComponent } from './components/wizard/wizard.component'

const exportedComponents = [
  AvatarComponent,
  CalendarDayComponent,
  CrudComponent,
  CrudIconComponent,
  CrudListComponent,
  CrudModalComponent,
  GridTileComponent,
  LayoutComponent,
  LoadingComponent,
  PageComponent,
  PageTitleComponent,
  TabsLayoutComponent,
  WizardComponent,
]

const entryComponents = [CrudModalComponent]

const internalComponents = [HeaderComponent]

const exportedModules = [
  AdminUiMaterialModule,
  CommonModule,
  FormsModule,
  RouterModule,
  FlexLayoutModule,
  CalendarModule,
]

@NgModule({
  imports: [...exportedModules, CalendarModule.forRoot()],
  declarations: [...exportedComponents, ...internalComponents],
  exports: [...exportedComponents, ...exportedModules],
  entryComponents: [...entryComponents],
})
export class AdminUiModule {}
