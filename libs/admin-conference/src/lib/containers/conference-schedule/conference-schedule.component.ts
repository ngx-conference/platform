import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'lib-conference-schedule',
  template: `
    <ui-tabs-layout [title]="title" [icon]="icon" [tabs]="tabs"></ui-tabs-layout>
  `,
})
export class ConferenceScheduleComponent implements OnInit {
  public title = 'Schedule'
  public icon = 'calendar_today'
  public tabs = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    const { conference, id } = this.route.snapshot.data

    this.tabs = conference.dates.map(day => ({
      label: day.name,
      link: day.day,
    }))

    if (!id && this.tabs[ 0 ]) {
      const { link } = this.tabs[ 0 ]
      this.router.navigate([ '/conferences', conference.id, 'schedule', link ])
    }

  }

  ngOnInit() {
  }

}
