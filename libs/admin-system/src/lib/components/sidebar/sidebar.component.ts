import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'admin-sidebar',
  template: `
    <div class="page-header">
      <h1 class="page-title">
        <i class="fa fa-fw fa-cog mr-3"></i>
        <a [routerLink]="['/admin']">
          Admin
        </a>
      </h1>
    </div>
    <div class="list-group list-group-transparent">
      <ng-container *ngFor="let item of items">
        <a [routerLink]="['/admin/', item.link ]"
           routerLinkActive="active"
           class="list-group-item list-group-item-action d-flex align-items-center">
          <i class="mr-2 {{ item.icon || 'fa fa-fw fa-cog' }}"></i>
          {{ item.label }}
        </a>
      </ng-container>
    </div>
  `,
  styles: [],
})
export class SidebarComponent implements OnInit {
  items = [
    {
      label: 'Users',
      link: 'users',
      icon: 'fa fa-fw fa-users',
    },
  ]

  constructor() {}

  ngOnInit() {}
}
