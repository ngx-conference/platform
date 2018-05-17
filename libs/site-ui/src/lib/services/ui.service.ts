import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public title = `ngx-conference`
  public menuItems = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Speakers',
      link: '/speakers',
    },
    {
      label: 'Schedule',
      link: '/schedule',
    },
    {
      label: 'Sessions',
      link: '/sessions',
    },
  ]
  public copyright = `<a href="https://github.com/ngx-conference/platform">ngx-conference</a>`

  constructor() {}
}
