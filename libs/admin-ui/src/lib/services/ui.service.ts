import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  public appTitle = 'NGX Conference Admin'
  public menuTitle = 'Menu'
  public menuItems = [
    {
      label: 'Dashboard',
      link: '/dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Speakers',
      link: '/speakers',
      icon: 'speaker',
    },
    {
      label: 'Sponsors',
      link: '/sponsors',
      icon: 'card_giftcard',
    },
    {
      label: 'Talks',
      link: '/talks',
      icon: 'present_to_all',
    },
  ]
  constructor() { }
}
