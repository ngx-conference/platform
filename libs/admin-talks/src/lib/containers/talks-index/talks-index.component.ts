import { Component } from '@angular/core'

@Component({
  selector: 'lib-talks-index',
  templateUrl: './talks-index.component.html',
  styleUrls: ['./talks-index.component.scss'],
})
export class TalksIndexComponent {
  cards = [{ title: 'Talks', cols: 2, rows: 1 }]
}
