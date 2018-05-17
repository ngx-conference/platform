import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'lib-session-index',
  template: `
    <h3 class="mb-3">Sessions</h3>
    <pre>{{ sessions | json }}</pre>
  `,
})
export class SessionIndexComponent implements OnInit {
  public sessions: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sessions = this.route.snapshot.data[ 'sessions' ]
  }
}
