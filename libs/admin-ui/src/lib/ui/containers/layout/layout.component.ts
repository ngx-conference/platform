import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-layout',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
