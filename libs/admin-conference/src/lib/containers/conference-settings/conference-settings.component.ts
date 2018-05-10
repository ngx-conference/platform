import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { ConferenceService } from '@ngx-conference/admin-conference/src/lib/services/conference.service'
import { CrudConference } from '../../models/crud-conference'

@Component({
  selector: 'lib-conference-settings',
  template: `
    <ui-page-title title="Settings" icon="settings"></ui-page-title>
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
export class ConferenceSettingsComponent implements OnInit {
  public form = new FormGroup({})
  public conference = {}
  public crud = CrudConference

  constructor(private route: ActivatedRoute, private service: ConferenceService) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => this.conference = data.conference
    )
  }

  save() {
    this.service.fb.upsertItem(this.conference)
      .subscribe((saved) => {
        console.log('saved', saved)
      })
  }
}
