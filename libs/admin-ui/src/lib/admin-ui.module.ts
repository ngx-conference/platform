import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AdminUiMaterialModule } from './admin-ui-material.module'

import { LayoutComponent } from './ui/containers/layout/layout.component'

import { HeaderComponent } from './ui/components/header/header.component'
import { FooterComponent } from './ui/components/footer/footer.component'

@NgModule({
  imports: [CommonModule, RouterModule, AdminUiMaterialModule],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent, AdminUiMaterialModule],
})
export class AdminUiModule {}
