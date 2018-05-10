import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public appTitle = ''
  public menuTitle = ' UI_SERVICE '
  public menuLink = '/'
  public menuItems = []
  public user$: Observable<any>
}
