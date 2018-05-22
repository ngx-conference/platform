import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'

import { slugify, Wizard } from '@ngx-conference/admin-ui'
import { Conference } from '@ngx-conference/datamodel/src/lib/models/conference.model'

import { ConferenceService } from '../../services/conference.service'
import { Router } from '@angular/router'

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
  public model: Conference = new Conference()
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
    const id = slugify(this.model['name'])

    if (id !== this.model.id) {
      this.model = Object.assign({}, this.model, { id: id })
    }
  }
}
