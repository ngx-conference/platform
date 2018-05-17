import { Component } from '@angular/core'
import { MatTableDataSource } from '@angular/material'
import { SystemUser } from '../../models/system-user'

import { SystemUserService } from '../../services/system-user.service'

@Component({
  selector: 'system-users-index',
  template: `
    <ui-page-title title="Users" icon="people_outline"></ui-page-title>

    <mat-form-field class="filter">
      <input matInput (keyup)="applyFilter($event.target.value)" placeholder="Filter">
    </mat-form-field>

    <table mat-table #table [dataSource]="dataSource">

      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef class="avatar-th"></th>
        <td mat-cell *matCellDef="let user">
          <ui-avatar size="sm" [image]="user.avatar"></ui-avatar>
        </td>
      </ng-container>

      <ng-container matColumnDef="email">
        <th mat-header-cell *matHeaderCellDef> Email </th>
        <td mat-cell *matCellDef="let user">
          <a [routerLink]="[user.id]">{{user.email}}</a>
        </td>
      </ng-container>

      <ng-container matColumnDef="name">
        <th mat-header-cell *matHeaderCellDef> Name </th>
        <td mat-cell *matCellDef="let user">
          <a [routerLink]="[user.id]">{{user.name}}</a>
        </td>
      </ng-container>

      <ng-container matColumnDef="active">
        <th mat-header-cell *matHeaderCellDef> Active </th>
        <td mat-cell *matCellDef="let user">
          <mat-checkbox *ngIf="user.active" [ngModel]="user.active" [disabled]="true"></mat-checkbox>
          <span *ngIf="!user.active && user.requestAccess">
            Requested
          </span>
        </td>
      </ng-container>

      <ng-container matColumnDef="admin">
        <th mat-header-cell *matHeaderCellDef> Admin </th>
        <td mat-cell *matCellDef="let user">
          <mat-checkbox [ngModel]="user.admin" [disabled]="true"></mat-checkbox>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  `,
  styles: [`
    table {
      width: 100%;
    }
    a {
      color: #000;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline!important;
    }
    .avatar-th {
      width: 30px;
    }
    .filter {
      padding: 20px;
      font-size: 14px;
      width: 95%;
    }
  `]
})
export class UserIndexComponent {
  public displayedColumns = ['id', 'email', 'name', 'active', 'admin'];
  public dataSource = new MatTableDataSource<SystemUser>([]);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  constructor(
    public service: SystemUserService,
  ) {
    this.service.crud.getItems()
      .subscribe(res => this.dataSource.data = res)
  }

  handleAction({ type, payload }) {
    switch (type) {
      case 'DELETE':
        return this.service.crud.deleteItem(payload)
      default:
        console.log(`Unknown type: ${type}. Payload: `, payload)
    }
  }
}
