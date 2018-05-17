import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { UiService } from '@ngx-conference/site-ui/src/lib/services/ui.service'

@Component({
  selector: 'lib-conference-index',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class ConferenceIndexComponent implements OnInit {
  public conference: any

  constructor(private route: ActivatedRoute, private ui: UiService) {}

  ngOnInit() {
    this.conference = this.route.snapshot.data['conference']
    this.ui.setTitle(this.conference.name)
  }
}
