import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'lib-layout',
  template: `
    <lib-header></lib-header>
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
