import { NgModule } from '@angular/core'
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
} from '@angular/material'
import { LayoutModule } from '@angular/cdk/layout'

const materialModules = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  LayoutModule,
]

@NgModule({
  imports: [...materialModules],
  exports: [...materialModules],
})
export class AdminUiMaterialModule {}
