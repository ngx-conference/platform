import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { CrudConference } from '../../models/crud-conference'
import { ConferenceService } from '../../services/conference.service'

@Component({
  selector: 'lib-conference-settings-general',
  template: `
    <mat-card class="form">
      <mat-card-content>
        <ui-form [form]="form" [fields]="crud.fields" [model]="conference"></ui-form>
        <button mat-raised-button (click)="save()" class="button">
          <mat-icon>save</mat-icon>
          Save
        </button>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .form {
      padding: 30px;
    }
    ::ng-deep .mat-form-field {
      margin: 20px 0!important;
    }
  `]
})
export class ConferenceSettingsGeneralComponent implements OnInit {
  public form = new FormGroup({})
  public conference = {}
  public crud = CrudConference

  constructor(private route: ActivatedRoute, private service: ConferenceService) { }

  ngOnInit() {
    this.conference = this.route.snapshot.data['conference']
  }

  save() {
    this.service.fb.upsertItem(this.conference)
      .subscribe((saved) => {
        console.log('saved', saved)
      })
  }
}
