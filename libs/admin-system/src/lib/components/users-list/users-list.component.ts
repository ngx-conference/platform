import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-users-list',
  template: `
    <div class="card" *ngIf="items && fields">
      <div>
        <h3 class="card-title m-3">
          <i class="fa fa-fw fa-table"></i>
          Data
        </h3>
      </div>
      <table class="table table-hover mb-0">
        <tr>
          <th>{{ displayField }}</th>
          <ng-container *ngFor="let field of fields">
            <ng-container *ngIf="field !== displayField">
              <th>{{ field }}</th>
            </ng-container>
          </ng-container>
          <th></th>
        </tr>
        <tr *ngFor="let item of items">
          <th>
            <a href="" (click)="edit($event, item)">
              {{ item[displayField] }}
            </a>
          </th>
          <ng-container *ngFor="let field of fields">
            <ng-container *ngIf="field !== displayField">
              <td>{{ item[field] }}</td>
            </ng-container>
          </ng-container>
          <td class="text-right p-3">
            <button class="btn btn-sm btn-outline-danger" (click)="delete(item.id)">
              <i class="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
  styles: [],
})
export class UsersListComponent {
  @Input() public displayField = 'id'
  @Input() public items
  @Input() public fields: any[]
  @Output() action = new EventEmitter()

  delete(id) {
    if (window.confirm('Are you sure?')) {
      this.action.emit({ type: 'DELETE', payload: id })
    }
  }

  edit(e, item) {
    e.preventDefault()
    this.action.emit({ type: 'EDIT', payload: item })
  }
}
