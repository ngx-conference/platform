import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'ui-grid-tile',
  template: `
    <mat-card class="dashboard-card">
      <mat-card-header *ngIf="title || menu.length">
        <div mat-card-title class="card-title">
          <ng-container *ngIf="titleLink; else titleOny">
            <a [routerLink]="titleLink">{{title}}</a>
          </ng-container>
          <ng-template #titleOny>
            {{title}}
          </ng-template>
          <ng-container *ngIf="menu.length">
            <button mat-icon-button class="menu" [matMenuTriggerFor]="menuEl" aria-label="Toggle menu">
              <mat-icon>more_vert</mat-icon>
            </button>
            <mat-menu #menuEl="matMenu" [overlapTrigger]="false">
              <ng-container *ngFor="let item of menu">
                <button mat-menu-item (click)="item.handler(data)">
                  <mat-icon *ngIf="item.icon">item.icon</mat-icon>
                  <span>{{item.label}}</span>
                </button>
              </ng-container>
            </mat-menu>
          </ng-container>
        </div>
      </mat-card-header>
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
      <mat-dialog-actions *ngIf="buttons.length">
        <ng-container *ngFor="let button of buttons">
          <button mat-raised-button (click)="action.emit({ type: button.action, payload: data })" class="button">
            <mat-icon *ngIf="button.icon">{{button.icon}}</mat-icon>
            <span>{{button.label}}</span>
          </button>
        </ng-container>
      </mat-dialog-actions>
    </mat-card>
  `,
  styles: [`
    :host.mat-card-header-text {
      margin: 0;
    }
    .dashboard-card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }
    .card-title {
      padding: 0;
      font-size: 18px;
    }
    .card-title a {
      text-decoration: none;
      font-weight: bold;
    }
    .menu {
      position: absolute;
      top: 5px;
      right: 10px;
    }
    mat-dialog-actions {
      position: absolute;
      bottom: 10px;
      right: 10px;
    }
  `]
})
export class GridTileComponent {
  @Input() buttons: any[] = []
  @Input() menu: any[] = []

  @Input() data: any
  @Input() imageUrl
  @Input() title: string
  @Input() titleLink

  @Output() action = new EventEmitter()
}
