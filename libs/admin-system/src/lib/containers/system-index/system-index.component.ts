import { Component } from '@angular/core'

@Component({
  selector: 'admin-index',
  template: `
    <div class="buttons">
      <a mat-button href="" *ngFor="let item of menuItems"
         routerLinkActive="active"
         [routerLink]="item.link" class="link">
        <mat-icon class="icon">{{item.icon}}</mat-icon>
        <span>{{item.label}}</span>
      </a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .buttons {
      padding: 23px;
    }
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
      label: 'Export & Import',
      link: [ 'export-import' ],
      icon: 'cloud_upload',
    },
  ]
}
