import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public appTitle = ''
  public menuTitle = 'nxg-conference'
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
  public user$: Observable<any>
}
