import { Component } from '@angular/core'
import { TalkService } from '../../services/talk.service'
import { MatDialog } from '@angular/material'
import { TalkModalComponent } from '../../components/talk-modal/talk-modal.component'

@Component({
  selector: 'lib-talks-index',
  templateUrl: './talks-index.component.html',
  styleUrls: ['./talks-index.component.scss'],
})
export class TalksIndexComponent {
  constructor(public service: TalkService, public dialog: MatDialog) {}

  openModal(item = {}) {
    const modalRef = this.dialog.open(TalkModalComponent, {
      data: Object.assign({}, item),
    })

    const modalInst = modalRef.componentInstance

    modalInst.fields = this.service.fields
    modalInst.saveAction = (data) => this.service.fb.upsertItem(data)

    modalRef.afterClosed()
      .subscribe(closed => console.log('closed', closed))
  }

  delete(talk) {
    if (window.confirm('Delete this item?')) {
      this.service.fb.deleteItem(talk.id)
    }
  }
}
