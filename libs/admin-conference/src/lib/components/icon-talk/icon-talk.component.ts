import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'lib-icon-talk',
  template: `
    <ui-grid-tile [data]="data" [buttons]="buttons" (action)="action.emit($event)">
      <h5>{{data.title}}</h5>
      <p>{{data.description}}</p>
    </ui-grid-tile>
  `,
})
export class IconTalkComponent {
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
