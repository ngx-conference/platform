import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-avatar',
  template: `
    <img [src]="image" alt="" class="avatar {{size}}" [width]="width" [height]="width" />
  `,
  styles: [`
    .avatar {
      border-radius: 50%;
    }
    .sm {
      width: 20px;
      height: 20px;
    }
    .md {
      width: 40px;
      height: 40px;
    }
  `],
})
export class AvatarComponent {
  @Input() public image;
  @Input() public size: 'sm'|'md' = 'md';

  get width() {
    switch (this.size) {
      case 'sm':
        return 20;
      case 'md':
        return 40;
    }
  }
}
