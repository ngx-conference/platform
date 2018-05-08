import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AdminUiMaterialModule } from './admin-ui-material.module'

import { LayoutComponent } from './containers/layout/layout.component'

import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  imports: [CommonModule, RouterModule, AdminUiMaterialModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent, AdminUiMaterialModule],
})
export class AdminUiModule {}
