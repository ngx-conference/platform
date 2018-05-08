import { Component } from '@angular/core'

@Component({
  selector: 'lib-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss'],
})
export class DashboardIndexComponent {
  cards = [
    { title: 'Schedule', cols: 2, rows: 1 },
    { title: 'Speakers', cols: 1, rows: 1 },
    { title: 'Sponsors', cols: 1, rows: 2 },
    { title: 'Talks', cols: 1, rows: 1 },
  ]
}
