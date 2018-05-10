import { Component, OnDestroy, OnInit } from '@angular/core'

import { Subscription } from 'rxjs/index'

import { SpeakerService } from '../../services/speaker.service'
import { SponsorService } from '../../services/sponsor.service'
import { TalkService } from '../../services/talk.service'

@Component({
  selector: 'lib-conference-dashboard',
  templateUrl: './conference-dashboard.component.html',
  styleUrls: ['./conference-dashboard.component.scss'],
})
export class ConferenceDashboardComponent implements OnInit, OnDestroy {
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

  private subs: Subscription[]

  constructor(
    public speakerService: SpeakerService,
    public sponsorService: SponsorService,
    public talkService: TalkService,
  ) {}

  ngOnInit() {
    this.subs = [
      this.speakerService.fb
        .count()
        .subscribe(count => (this.speakers.count = count)),
      this.sponsorService.fb
        .count()
        .subscribe(count => (this.sponsors.count = count)),
      this.talkService.fb
        .count()
        .subscribe(count => (this.talks.count = count)),
    ]
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe())
  }
}
