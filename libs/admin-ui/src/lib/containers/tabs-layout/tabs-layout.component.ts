import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

export class Tab {
  public label: string
  public link: string
  public icon?: string
}

@Component({
  selector: 'ui-tabs-layout',
  template: `
    <ui-page-title *ngIf="title" [title]="title" [icon]="icon"></ui-page-title>
    <nav mat-tab-nav-bar>
      <a mat-tab-link *ngFor="let tab of tabs"
         [routerLink]="tab.link" routerLinkActive #rla="routerLinkActive" [active]="rla.isActive">
        <mat-icon *ngIf="tab.icon">{{tab.icon}}</mat-icon>
        {{tab.label}}
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    mat-icon {
      margin-right: 5px;
    }
  `
  ]
})
export class TabsLayoutComponent implements OnInit {
  @Input() public icon: string
  @Input() public tabs: Tab[]
  @Input() public title: string

  constructor(public route: ActivatedRoute) {}
  ngOnInit() {
    this.icon = this.icon || this.route.snapshot.data.icon
    this.tabs = this.tabs || this.route.snapshot.data.tabs
    this.title = this.title || this.route.snapshot.data.title
  }
}
