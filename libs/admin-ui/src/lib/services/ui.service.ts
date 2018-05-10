import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public menuTitle = 'nxg-conference'
  public menuLink = '/'
  public menuItems = [
    {
      label: 'Conferences',
      link: '/conferences',
      icon: 'people',
    },
  ]
  public user$: Observable<any>
}
