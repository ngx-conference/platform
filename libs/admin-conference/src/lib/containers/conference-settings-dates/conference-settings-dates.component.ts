import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { Field } from '@ngx-conference/admin-ui'
import { ConferenceService } from '../../services/conference.service'

@Component({
  selector: 'lib-conference-settings-days',
  template: `
    <mat-card class="form">
      <mat-card-content>
        <ui-form *ngIf="fields" [form]="form" [fields]="fields" [model]="conference"></ui-form>
        <button mat-raised-button (click)="save()" class="button">
          <mat-icon>save</mat-icon>
          Save
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [
    `
    .form {
      padding: 30px;
    }
  `,
  ],
})
export class ConferenceSettingsDatesComponent implements OnInit {
  public form = new FormGroup({})
  public conference = {}
  public fields

  constructor(
    private route: ActivatedRoute,
    private service: ConferenceService,
  ) {}

  ngOnInit() {
    this.conference = this.route.snapshot.data.conference
    this.setFields()
  }

  setFields() {
    this.fields = [
      Field.template('<h4>Conference Dates</h4>'),
      Field.repeat('dates', [
        Field.input('name', {
          label: 'Display name',
          required: true,
        }),
        Field.date('day', {
          label: 'Date',
          required: true,
        }),
      ]),
      Field.template('<h4>Conference Rooms</h4>'),
      Field.repeat('rooms', [
        Field.input('name', {
          label: 'Room name',
          required: true,
        }),
      ]),
    ]
  }

  save() {
    this.service.fb.upsertItem(this.conference).subscribe(saved => {
      console.log('saved', saved)
    })
  }
}
