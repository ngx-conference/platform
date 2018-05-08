import { Component } from '@angular/core'

@Component({
  selector: 'lib-speakers-index',
  templateUrl: './speakers-index.component.html',
  styleUrls: ['./speakers-index.component.css'],
})
export class SpeakersIndexComponent {
  cards = [{ title: 'Speakers', cols: 2, rows: 1 }]
}
