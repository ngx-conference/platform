import { Component } from '@angular/core'

@Component({
  selector: 'lib-sponsors-index',
  templateUrl: './sponsors-index.component.html',
  styleUrls: ['./sponsors-index.component.css'],
})
export class SponsorsIndexComponent {
  cards = [{ title: 'Sponsors', cols: 2, rows: 1 }]
}
