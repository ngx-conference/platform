import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material'

import { CrudModalComponent } from '../crud-modal/crud-modal.component'
import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { AngularFirestore } from 'angularfire2/firestore'
import { Subscription } from 'rxjs/index'

@Component({
  selector: 'ui-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss'],
})
export class CrudListComponent implements OnInit, OnDestroy {
  @Input() title: string
  @Input() icon: string
  @Input() collectionId: string
  @Input() displayField: string
  @Input() fields: any[]
  @Input() db: AngularFirestore

  public service: FirebaseCrudService
  public items: any[]
  private subscribtion: Subscription

  constructor(public dialog: MatDialog) {}

  openModal(item = {}) {
    const modalRef = this.dialog.open(CrudModalComponent, {
      data: Object.assign({}, item),
    })

    const modalInst = modalRef.componentInstance
    modalInst.fields = this.fields
    modalInst.title = this.title
    modalInst.icon = this.icon
    modalInst.saveAction = (data) => this.service.upsertItem(data)
  }

  ngOnInit() {
    this.service = new FirebaseCrudService(this.db, this.collectionId)
    this.subscribtion = this.service.getItems()
      .subscribe(res => this.items = res)
  }

  ngOnDestroy() {
    this.subscribtion.unsubscribe()
  }

  delete(item) {
    if (window.confirm('Delete this item?')) {
      this.service.deleteItem(item.id)
    }
  }
}
