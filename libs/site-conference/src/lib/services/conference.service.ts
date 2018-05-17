import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {
  public conference: any

  constructor(private db: AngularFirestore) {
    const stored = window.localStorage.getItem('conference')

    if (stored) {
      this.conference = JSON.parse(stored)
    }
  }

  getConferences() {
    return this.db.collection('/Conferences').valueChanges()
  }

  getSpeakers() {
    return this.db.collection('/Speakers', ref =>
        ref.where('parentId', '==', this.conference.id),
      )
      .valueChanges()
  }

  getSchedule() {
    return this.db.collection('/Talks', ref =>
        ref.where('parentId', '==', this.conference.id),
      )
      .valueChanges()
  }


  getSessions() {
    return this.db.collection('/Talks', ref =>
        ref.where('parentId', '==', this.conference.id),
      )
      .valueChanges()
  }

  getSponsors() {
    return this.db.collection('/Sponsors', ref =>
        ref.where('parentId', '==', this.conference.id),
      )
      .valueChanges()
  }

  selectConference(conference) {
    this.conference = conference
    window.localStorage.setItem('conference', JSON.stringify(conference))
    return this.conference
  }

}
