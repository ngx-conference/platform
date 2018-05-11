import { Component } from '@angular/core'

@Component({
  selector: 'admin-index',
  template: `
    <ui-page-title title="Settings" icon="settings">
      <a mat-button href="" *ngFor="let item of menuItems"
         routerLinkActive="active"
         [routerLink]="item.link" class="link">
        <mat-icon class="icon">{{item.icon}}</mat-icon>
        <span>{{item.label}}</span>
      </a>
    </ui-page-title>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .active {
      background-color: #efefef;
    }
    .icon {
      margin-right: 5px;
    }
    .link {
      margin-left: 5px;
    }
  `]
})
export class SystemIndexComponent {
  public menuItems = [
    {
      label: 'Users',
      link: [ 'users' ],
      icon: 'people_outline',
    },
    {
      label: 'Export',
      link: [ 'export' ],
      icon: 'cloud_upload',
    },
    {
      label: 'Import',
      link: [ 'import' ],
      icon: 'cloud_download',
    },
  ]
}
