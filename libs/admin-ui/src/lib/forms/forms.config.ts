import { ConfigOption } from '@ngx-formly/core'
import { HorizontalComponent } from './wrappers/horizontal/horizontal.component'


export function minlengthValidationMessages(err, field) {
  return `This field should have at least ${field.templateOptions.minLength} characters`;
}

export const config: ConfigOption = {
  types: [
    {
      name: 'inputHorizontal',
      extends: 'input',
      wrappers: ['fieldset', 'horizontalWrapper'],
    },
  ],
  wrappers: [
    { name: 'horizontalWrapper', component: HorizontalComponent },
    { name: 'wrapper', component: HorizontalComponent },
  ],
  validators: [
    // { name: 'email', validation: Validators.email },
    // { name: 'required', validation: Validators.required },
  ],
  validationMessages: [
    { name: 'email', message: 'The email address does not seem to be valid.' },
    { name: 'required', message: 'This field is required.' },
    { name: 'minlength', message: minlengthValidationMessages },
  ],
}
