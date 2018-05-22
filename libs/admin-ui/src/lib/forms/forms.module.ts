import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyModule } from '@ngx-formly/core'

import { AdminUiMaterialModule } from '../admin-ui-material.module'

import { config } from './forms.config'

import { FormComponent } from './components/form/form.component'
import { HorizontalComponent } from './wrappers/horizontal/horizontal.component'
import { RepeatTypeComponent } from './types/repeat-section.type'

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyMaterialModule,
    AdminUiMaterialModule,
  ],
  exports: [NgFormsModule, ReactiveFormsModule, FormlyModule, FormComponent],
  declarations: [FormComponent, HorizontalComponent, RepeatTypeComponent],
})
export class FormsModule {}
