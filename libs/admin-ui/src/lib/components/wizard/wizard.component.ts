import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { FormArray, FormGroup } from '@angular/forms'

export class Wizard {
  public actionType?: string
  public debug?: boolean
  public labelNext?: string
  public labelPrevious?: string
  public labelSubmit?: string
  public steps: WizardStep[]

  constructor() {
    this.actionType = 'SUBMIT'
    this.labelNext = 'Next'
    this.labelPrevious = 'Previous'
    this.labelSubmit = 'Submit'
    this.steps = []
  }
}

export class WizardStep {
  label: string
  fields: FormlyFieldConfig[]
  review?: boolean
}

@Component({
  selector: 'ui-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WizardComponent implements OnInit {
  @Input() public wizard: Wizard = new Wizard()
  @Input() public form = new FormArray([])
  @Input() public model = {}
  @Input() public options = {}

  @Output() public action = new EventEmitter()
  @Output() public modelChange = new EventEmitter()

  private activeStep = 0

  ngOnInit() {
    this.form = new FormArray(this.wizard.steps.map(() => new FormGroup({})))
    this.options = this.wizard.steps.map(() => <FormlyFormOptions>{})
  }

  prevStep(step) {
    this.activeStep = step - 1
  }

  nextStep(step) {
    this.activeStep = step + 1
  }

  debug() {
    this.action.emit({
      type: 'DEBUG',
      payload: {
        activeStep: this.activeStep,
        form: this.form,
        model: this.model,
        options: this.options,
        wizard: this.wizard,
      },
    })
  }

  submit() {
    this.action.emit({ type: this.wizard.actionType, payload: this.model })
  }
}
