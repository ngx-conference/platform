import { Component } from '@angular/core'
import { SponsorService } from '@ngx-conference/admin-sponsors'
import { TalkService } from '@ngx-conference/admin-talks'
import { SpeakerService } from '@ngx-conference/admin-speakers'

@Component({
  selector: 'lib-dashboard-index',
  templateUrl: './dashboard-index.component.html',
  styleUrls: ['./dashboard-index.component.scss'],
})
export class DashboardIndexComponent {
  speakers = {
    title: 'Speakers',
    link: '/speakers',
    cols: 1,
    rows: 1,
    count: 0,
  }
  sponsors = {
    title: 'Sponsors',
    link: '/sponsors',
    cols: 1,
    rows: 1,
    count: 0,
  }
  talks = {
    title: 'Talks',
    link: '/talks',
    cols: 1,
    rows: 1,
    count: 0,
  }
  schedule = {
    title: 'Schedule',
    link: '/schedule',
    cols: 3,
    rows: 1,
    count: 0,
  }

  get cards() {
    return [this.speakers, this.sponsors, this.talks, this.schedule]
  }

  constructor(
    public speakerService: SpeakerService,
    public sponsorService: SponsorService,
    public talkService: TalkService,
  ) {
    this.speakerService.fb
      .count()
      .subscribe(count => (this.speakers.count = count))
    this.sponsorService.fb
      .count()
      .subscribe(count => (this.sponsors.count = count))
    this.talkService.fb.count().subscribe(count => (this.talks.count = count))
  }
}
