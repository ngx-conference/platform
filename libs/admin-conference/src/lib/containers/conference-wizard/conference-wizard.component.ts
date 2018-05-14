import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { Wizard } from '@ngx-conference/admin-ui'

import { ConferenceService } from '../../services/conference.service'
import { Location } from '@angular/common'
import { Router } from '@angular/router'

const slugify = (str): string => {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'àáãäâèéëêìíïîòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeiiiioooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

@Component({
  selector: 'lib-conference-wizard',
  template: `
    <ui-page-title title="Add Conference" icon="people"></ui-page-title>
    <ui-wizard [form]="form"
               [(model)]="model"
               [wizard]="wizard"
               (modelChange)="modelChange()"
               (action)="service.handleAction($event)">
    </ui-wizard>
  `,
})
export class ConferenceWizardComponent {

  public form = new FormGroup({})
  public model = {}
  public wizard: Wizard = { steps: [] }

  constructor(public service: ConferenceService, private router: Router) {
    this.wizard = service.wizard
    this.service.handlers = {
      SUBMIT: payload => {
        this.form.disable()
        return this.service.fb.addItem(payload).subscribe(
          res => {
            this.router.navigate([ '/conferences', res.id ])
          },
          err => console.error(err),
          () => this.form.enable(),
        )
      },
    }
  }

  modelChange() {
    this.model = Object.assign({}, this.model, { id: slugify(this.model['name']) })
  }
}
