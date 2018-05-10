import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { ConferenceService } from '../../services/conference.service'

@Component({
  selector: 'lib-conference-index',
  templateUrl: './conference-index.component.html',
  styleUrls: ['./conference-index.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ConferenceIndexComponent implements OnInit {
  public buttons = [
    {
      icon: 'delete',
      action: 'DELETE',
    },
    {
      icon: 'edit',
      action: 'EDIT',
    },
  ]
  public items: any[] = []
  public loading: boolean

  constructor(public service: ConferenceService) {
  }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    this.loading = true
    this.service.fb.getItems().subscribe(
      items => {
        this.loading = false
        this.items = items
      }, err => {
        this.loading = false
        console.log(err)
      })
  }

  delete(item) {
    if (window.confirm('Delete this item?')) {
      this.service.fb.deleteItem(item.id)
    }
  }

  handleAction({type, payload}) {
    switch (type) {
      case 'DELETE':
        return this.delete(payload)
      default:
        console.log('Unknown type', type, payload)
    }
  }

}
