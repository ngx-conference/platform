import { Component, OnInit } from '@angular/core'
import { ConferenceService } from '@ngx-conference/site-conference'

@Component({
  selector: 'lib-conference-picker',
  template: `
    <ui-header title="Pick your conference"></ui-header>
    <div class="container">
      <div class="row">
        <div class="col-md-4" *ngFor="let item of conferences">
          <div class="text-center">
            <a class="btn btn-primary p-5" [routerLink]="item.id">
              {{item.name}}
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ConferencePickerComponent implements OnInit {
  public conferences: any[]

  constructor(public service: ConferenceService) {}

  ngOnInit() {
    this.service
      .getConferences()
      .subscribe((res: any) => (this.conferences = res))
  }
}
