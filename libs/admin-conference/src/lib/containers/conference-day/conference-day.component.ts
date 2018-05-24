import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { CalendarEvent } from '@ngx-conference/admin-ui'
import { Conference, Session } from '@ngx-conference/datamodel'
import { AngularFirestore } from 'angularfire2/firestore'
import { Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

const sessionMap = (rooms) => {
  return rooms.reduce((acc, cur) => ({ ...acc, [cur.name]: [] }), {})
}

@Component({
  selector: 'lib-conference-day',
  template: `
    <div class="label">{{date}}</div>
    <div class="row" *ngIf="date">
      <div class="col-md-6" *ngFor="let room of conference.rooms">
        <div class="label">{{room.name}}</div>
        <ui-calendar-day [events]="sessions[room.name]" [date]="date">
        </ui-calendar-day>
      </div>
    </div>
  `,
  styles: [
    `
      .label {
        font-family: Roboto, "Helvetica Neue", sans-serif;
        padding: 25px;
      }
      .col-md-6 {
        width: 49%;
        float: left;
      }
    `,
  ],
})
export class ConferenceDayComponent {
  public date: string
  public sessions: any = {}

  private conference: Conference
  private crud: FirebaseCrudService
  private sub: Subscription

  constructor(private route: ActivatedRoute, private db: AngularFirestore) {
    this.conference = this.route.snapshot.data['conference']
    this.sessions = sessionMap(this.conference.rooms)
    this.crud = new FirebaseCrudService(
      this.db,
      'Sessions',
      'Conferences',
      this.conference.id,
    )
    this.route.params
      .pipe(map(params => params.date))
      .subscribe(date => this.loadDate(date))
  }

  public loadDate(date: string) {
    this.date = date

    if (this.sub) {
      this.sub.unsubscribe()
    }
    this.loadEvents()
  }

  updateSessions(sessions: Session[]) {
    this.sessions = sessionMap(this.conference.rooms)
    sessions.forEach(session => {
      if (!this.sessions[session.room]) {
        console.log('No such room', session.room, session)
        return
      }
      this.sessions[session.room].push(
        CalendarEvent(session.date, session.start, session.end, session.title),
      )
    })
  }

  loadEvents() {
    this.sub = this.crud
      .getRelatedItems('Sessions')
      .subscribe(items => this.updateSessions(items))
  }
}
