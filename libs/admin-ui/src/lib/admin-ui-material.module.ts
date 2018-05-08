import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material'
import { LayoutModule } from '@angular/cdk/layout'

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  LayoutModule,
]

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class AdminUiMaterialModule {}
