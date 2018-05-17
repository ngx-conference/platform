import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'

const PATH_CONFERENCES = 'Conferences'
const PATH_SESSIONS = 'Sessions'
const PATH_SCHEDULE = 'Sessions'
const PATH_SPEAKERS = 'Speakers'
const PATH_SPONSORS = 'Sponsors'

@Injectable({
  providedIn: 'root',
})
export class ConferenceService {

  constructor(private db: AngularFirestore) {}

  private collectionRef() {
    return this.db.collection(PATH_CONFERENCES)
  }

  private collectionDocRef(id: string) {
    return this.collectionRef().doc(id)
  }

  private conferenceDocRelationRef(id: string, relation: string) {
    return this.collectionDocRef(id).collection(relation)
  }

  getConferences() {
    return this.collectionRef().valueChanges()
  }

  getConference(id: string) {
    return this.collectionDocRef(id).valueChanges()
  }

  getSchedule(id: string) {
    return this.conferenceDocRelationRef(id, PATH_SCHEDULE).valueChanges()
  }

  getSessions(id: string) {
    return this.conferenceDocRelationRef(id, PATH_SESSIONS).valueChanges()
  }

  getSpeakers(id: string) {
    return this.conferenceDocRelationRef(id, PATH_SPEAKERS).valueChanges()
  }

  getSponsors(id: string) {
    return this.conferenceDocRelationRef(id, PATH_SPONSORS).valueChanges()
  }
}
