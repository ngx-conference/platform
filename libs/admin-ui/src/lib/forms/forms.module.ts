import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyModule } from '@ngx-formly/core'

import { config } from './forms.config'

import { FormComponent } from './components/form/form.component'
import { HorizontalComponent } from './wrappers/horizontal/horizontal.component'

@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(config),
    FormlyMaterialModule,
  ],
  exports: [NgFormsModule, ReactiveFormsModule, FormlyModule, FormComponent],
  declarations: [FormComponent, HorizontalComponent],
})
export class FormsModule {}
