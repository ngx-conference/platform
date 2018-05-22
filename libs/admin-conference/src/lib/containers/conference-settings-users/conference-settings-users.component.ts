import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { Field } from '@ngx-conference/admin-ui'
import { AngularFirestore } from 'angularfire2/firestore'
import { Subscription } from 'rxjs'
import { CrudConference } from '../../models/crud-conference'
import { ConferenceService } from '../../services/conference.service'

const roles = [{
  label: 'Editor',
  value: 'editor',
}, {
  label: 'Speaker',
  value: 'speaker',
}]

@Component({
  selector: 'lib-conference-settings-users',
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
  styles: [`
    .form {
      padding: 30px;
    }
  `]
})
export class ConferenceSettingsUsersComponent implements OnDestroy, OnInit {
  public form = new FormGroup({})
  public conference = {}
  public users = []
  public fields
  public usersSub: Subscription

  constructor(
    private route: ActivatedRoute,
    private service: ConferenceService,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.conference = this.route.snapshot.data.conference
    const fb = new FirebaseCrudService(this.db, 'Users')
    this.usersSub = fb.getItems()
      .subscribe(res => {
        this.users = res
        this.setFields()
      })
  }

  setFields() {
    this.fields = [
      Field.repeat('users', [
        Field.select('uid', {
          label: 'User',
          options: this.users
            .map(user => ({
              label: user.name,
              value: user.id,
            }))
        }),
        Field.select('role',{ label: 'Role', options: roles })
      ])
    ]
  }

  ngOnDestroy() {
    this.usersSub.unsubscribe()
  }

  save() {
    this.service.fb.upsertItem(this.conference)
      .subscribe((saved) => {
        console.log('saved', saved)
      })
  }
}
