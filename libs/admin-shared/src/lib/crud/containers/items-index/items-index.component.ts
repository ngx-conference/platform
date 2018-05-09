import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { Collection } from '../../data.typings'
import { DataService } from '../../services'
import 'rxjs/add/operator/take'

export const getProperties = o =>
  Object.keys(o || {})
    .map(id => Object.assign({}, o[id], { id }))
    .filter(prop => prop.id !== 'id')

@Component({
  selector: 'app-notes-index',
  template: `
    <app-item-list [items]="items$ | async"
                   [collection]="collection"
                   (action)="handleAction($event)">
    </app-item-list>
  `,
})
export class ItemsIndexComponent implements OnInit {
  // private modalRef: BsModalRef
  public collection: Collection
  public properties: any[]
  public items$

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    // private modal: BsModalService,
  ) {
  }

  ngOnInit() {
    this.route.data
      .map(res => this.parseCollection(res['collection']))
      .map(res => res && res.id)
      .subscribe(id => (this.items$ = this.data.getItems(id)))
  }

  parseCollection(collection) {
    this.collection = collection
    this.properties = getProperties(collection.properties || {})
    return collection
  }

  hideModal() {
    // this.modalRef.hide()
    console.log('hideModal')
  }

  showModal(type, item) {
    const initialState = {
      item: Object.assign({}, item),
      properties: this.properties,
      type,
    }
    // this.modalRef = this.modal.show(ItemModalComponent, { initialState })
    // this.modalRef.content.action.subscribe(event => this.handleAction(event))
    console.log('showModal', { type, item })
  }

  handleAction({ type, payload }) {
    switch (type) {
      case 'DELETE':
        return this.data.deleteItem(this.collection.id, payload)
      case 'CANCEL':
        return this.hideModal()
      case 'INSPECT':
        return this.showModal('inspect', payload)
      case 'EDIT':
        return this.showModal('form', payload)
      case 'ADD':
        return this.showModal('form', {})
      case 'SAVE_CLOSE':
      case 'SAVE':
        return this.data
          .upsertItem(this.collection.id, payload)
          .subscribe(() => type === 'SAVE_CLOSE' && this.hideModal(), err => console.log('err', err))
      default:
        console.log(`Unknown type: ${type}. Payload: `, payload)
    }
  }
}
