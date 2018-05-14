import { UiProfile } from './ui.state'

export class IsHandset {
  static readonly type = '[Ui] Is Handset';
  constructor(public isHandset: boolean) {}
}

export class SetMenuItems {
  static readonly type = '[Ui] Set Menu Items';
  constructor(public menuItems: any[]) {}
}

export class SetTitle {
  static readonly type = '[Ui] Set Title';
  constructor(public title: string) {}
}

export class SetProfile {
  static readonly type = '[Ui] Set Profile';
  constructor(public profile: UiProfile) {}
}

export class UiLogout {
  static readonly type = '[Ui] Logout';
}
