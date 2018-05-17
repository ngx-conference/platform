import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { AngularFirestore } from 'angularfire2/firestore'
import { Subscription } from 'rxjs/index'

import { FirebaseCrudService } from '@ngx-conference/admin-api'

@Component({
  selector: 'lib-conference-dashboard',
  templateUrl: './conference-dashboard.component.html',
  styleUrls: ['./conference-dashboard.component.scss'],
})
export class ConferenceDashboardComponent implements OnInit, OnDestroy {
  sessions = {
    title: 'Sessions',
    link: '../sessions',
    cols: 1,
    rows: 1,
    count: 0,
  }
  speakers = {
    title: 'Speakers',
    link: '../speakers',
    cols: 1,
    rows: 1,
    count: 0,
  }
  sponsors = {
    title: 'Sponsors',
    link: '../sponsors',
    cols: 1,
    rows: 1,
    count: 0,
  }
  schedule = {
    title: 'Schedule',
    link: '../schedule',
    cols: 3,
    rows: 1,
    count: 0,
  }

  get cards() {
    return [this.sessions, this.speakers, this.sponsors, this.schedule]
  }

  private subs: Subscription[]
  private conference: any
  private parentCollection = 'Conferences'
  private db: AngularFirestore

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(res => {
      this.db = res.db
      this.conference = res.conference
      this.startCounter()
    })
    this.subs = []
  }

  startCounter() {
    const fb = new FirebaseCrudService(this.db, '', this.conference.id)

    this.subs = [
      fb
        .countRelated(this.parentCollection, this.conference.id, 'Speakers')
        .subscribe(res => (this.speakers.count = res)),
      fb
        .countRelated(this.parentCollection, this.conference.id, 'Sponsors')
        .subscribe(res => (this.sponsors.count = res)),
      fb
        .countRelated(this.parentCollection, this.conference.id, 'Sessions')
        .subscribe(res => (this.sessions.count = res)),
    ]
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe())
  }
}
