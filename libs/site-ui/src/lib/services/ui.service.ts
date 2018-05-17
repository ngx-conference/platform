import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UiService {
  public copyright = `<a href="https://github.com/ngx-conference/platform">ngx-conference</a>`
  public items = [
    {
      label: 'Home',
      link: 'home',
    },
    {
      label: 'Speakers',
      link: 'speakers',
    },
    {
      label: 'Schedule',
      link: 'schedule',
    },
    {
      label: 'Sessions',
      link: 'sessions',
    },
    {
      label: 'Sponsors',
      link: 'sponsors',
    },
  ]
  public title = `ngx-conference`

  constructor() {}

  setTitle(title: string) {
    this.title = title
  }
}
