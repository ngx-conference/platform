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
  @Input() iconComponent: any
  @Input() collectionId: string
  @Input() displayField: string
  @Input() parentId: string
  @Input() fields: any[]
  @Input() db: AngularFirestore

  public service: FirebaseCrudService
  public items: any[]
  public loading: boolean
  private subscription: Subscription

  constructor(public dialog: MatDialog) {}

  openModal(item = {}) {
    const modalRef = this.dialog.open(CrudModalComponent)
    const modalInst = modalRef.componentInstance
    modalInst.data = Object.assign({}, item)
    modalInst.fields = this.fields
    modalInst.title = this.title
    modalInst.icon = this.icon
    modalInst.saveAction = (data) => this.service.upsertItem(data)
  }

  ngOnInit() {
    this.service = new FirebaseCrudService(this.db, this.collectionId, this.parentId)
    this.loadData()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  loadData() {
    this.loading = true
    this.subscription = this.service.getItems()
      .subscribe(
        res => {
          this.loading = false
          this.items = res
        },
        err => {
          this.loading = false
          console.error(err)
        },
      )
  }

  handleAction({type, payload}) {
    switch (type) {
      case 'EDIT':
        return this.openModal(payload)
      case 'DELETE':
        return this.delete(payload)
      default:
        console.log('Unknown type', type, payload)
    }
  }

  delete(item) {
    if (window.confirm('Delete this item?')) {
      this.service.deleteItem(item.id)
    }
  }
}
