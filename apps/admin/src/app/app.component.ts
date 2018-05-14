import { Component } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="loading">Loading...</div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  public loading = true
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => (this.loading = false))
  }
}
