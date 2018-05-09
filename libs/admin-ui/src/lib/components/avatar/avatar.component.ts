import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-avatar',
  template: `
    <img [src]="image" alt="" class="avatar" />
  `,
  styles: [`
    .avatar {
      padding: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  `],
})
export class AvatarComponent {
  @Input() public image;
}
