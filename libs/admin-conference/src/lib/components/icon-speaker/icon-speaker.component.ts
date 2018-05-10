import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'lib-icon-speaker',
  template: `
    <ui-grid-tile [data]="data" [buttons]="buttons" (action)="action.emit($event)">
      <div class="header">
        <ui-avatar [image]="data.avatar" class="avatar"></ui-avatar>
        <h4>{{data.name}}</h4>
      </div>
      <p>{{data.bio}}</p>
    </ui-grid-tile>
  `,
  styles: [`
    .header {
      height: 50px;
    }
    .header h4 {
      margin: 0;
      padding: 12px;
    }
    .avatar {
      float: left;
      padding-right: 15px;
    }
  `]
})
export class IconSpeakerComponent {
  @Input() public data
  @Output() public action = new EventEmitter()
  public buttons = [
    {
      icon: 'delete',
      action: 'DELETE',
    },
    {
      icon: 'edit',
      action: 'EDIT',
    },
  ]
}
