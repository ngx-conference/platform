import { ConfigOption } from '@ngx-formly/core'

import { RepeatTypeComponent } from './types/repeat-section.type'
import { HorizontalComponent } from './wrappers/horizontal/horizontal.component'

export function minlengthValidationMessages(err, field) {
  return `This field should have more than ${field.templateOptions.minLength} characters`;
}
export function maxlengthValidationMessages(err, field) {
  return `This field should have less than ${field.templateOptions.maxLength} characters`;
}

export const config: ConfigOption = {
  types: [
    {
      name: 'inputHorizontal',
      extends: 'input',
      wrappers: ['fieldset', 'horizontalWrapper'],
    },
    {
      name: 'repeat',
      component: RepeatTypeComponent
    }
  ],
  wrappers: [
    { name: 'horizontalWrapper', component: HorizontalComponent },
    { name: 'wrapper', component: HorizontalComponent },
  ],
  validationMessages: [
    { name: 'email', message: 'The email address does not seem to be valid.' },
    { name: 'required', message: 'This field is required.' },
    { name: 'minlength', message: minlengthValidationMessages },
    { name: 'maxlength', message: maxlengthValidationMessages },
  ],
}
