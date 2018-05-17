import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'lib-schedule-index',
  template: `
    <h3 class="mb-3">Schedule</h3>
    <pre>{{ schedule | json }}</pre>
  `,
})
export class ScheduleIndexComponent implements OnInit {
  public schedule: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.schedule = this.route.snapshot.data['schedule']
  }
}
