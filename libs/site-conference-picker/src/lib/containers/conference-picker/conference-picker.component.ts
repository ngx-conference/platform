import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ConferenceService } from '@ngx-conference/site-conference'

@Component({
  selector: 'lib-conference-picker',
  template: `
    <ui-header title="Pick your conference"></ui-header>
    <div class="container">
      <div class="row">
        <div class="col-md-4" *ngFor="let item of conferences">
          <div class="text-center">
            <button class="btn btn-primary p-5" (click)="select(item)">
              {{item.name}}
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ConferencePickerComponent implements OnInit {
  public conferences: any[]

  constructor(
    public service: ConferenceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.service
      .getConferences()
      .subscribe((res: any) => (this.conferences = res))
  }

  select(conference) {
    this.service.selectConference(conference)
    this.router.navigate(['/'])
  }
}
