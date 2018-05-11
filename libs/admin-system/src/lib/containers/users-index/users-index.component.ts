import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UsersModalComponent } from '../../components/users-modal/users-modal.component'

@Component({
  selector: 'app-users-index',
  template: `
    <ui-page-title title="Users" icon="people_outline"></ui-page-title>
    <div *ngIf="error">
      <strong>An error occurred.</strong>
      {{error}}
    </div>
    <app-users-list
        [fields]="fields"
        [displayField]="displayField"
        [items]="users$ | async"
        (action)="handleAction($event)"></app-users-list>
  `,
})
export class UsersIndexComponent implements OnInit {
  private readonly collectionName = 'Users'

  public displayField = 'name'
  public fields = ['name', 'email']

  public users$
  public error

  constructor(
    // public fire: FirebaseDataService,
    private route: ActivatedRoute,
    // private data: DataService,
    // private modal: BsModalService,
  ) {}

  ngOnInit() {
    // this.users$ = this.fire.collectionsRef(this.collectionName)
  }

  hideModal() {
    // this.modalRef.hide()
  }

  showModal(type, user) {
    const initialState = {
      user: Object.assign({}, user),
      type,
    }
    // this.modalRef = this.modal.show(UsersModalComponent, { initialState })
    // this.modalRef.content.action.subscribe(event => this.handleAction(event))
  }

  handleAction({ type, payload }) {
    switch (type) {
      // case 'DELETE':
        // return this.data.deleteItem(this.collectionName, payload)
      case 'CANCEL':
        return this.hideModal()
      case 'EDIT':
        return this.showModal('form', payload)
      case 'SAVE_CLOSE':
      case 'SAVE':
        // return this.data
        //   .addItem(this.collectionName, payload)
        //   .subscribe(
        //     () => type === 'SAVE_CLOSE' && this.hideModal(),
        //     err => console.log('err', err),
        //   )
      default:
        console.log(`Unknown type: ${type}. Payload: `, payload)
    }
  }
}
