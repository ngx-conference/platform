import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'lib-conference-home',
  template: `
    <h1 class="mb-5">
      {{conference.name}}
    </h1>
    <div class="row">
      <div class="col-md-3" *ngFor="let item of links">
        <div class="text-center mb-4">
          <a class="btn btn-primary p-5" [routerLink]="item.link">
            {{item.label}}
          </a>
        </div>
      </div>
    </div>
  `,
})
export class ConferenceHomeComponent implements OnInit {
  public links = [
    {
      label: 'Speakers',
      link: '/speakers',
    },
    {
      label: 'Sessions',
      link: '/sessions',
    },
    {
      label: 'Schedule',
      link: '/schedule',
    },
    {
      label: 'Sponsors',
      link: '/sponsors',
    },
  ]
  public conference: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.conference = this.route.snapshot.data[ 'conference' ]
  }
}
