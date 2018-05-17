import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ExportImportService {
  constructor(public db: AngularFirestore) {}

  public export() {
    const exportModels = [
      'Conferences',
      'Images',
      'Speakers',
      'Sponsors',
      'Sessions',
      'Users',
    ]

    const result = {
      date: Date.now(),
      data: exportModels.reduce((acc, cur) => Object.assign(acc, { [cur]: [] }), {})
    }
    const data = this.db.collection('Conferences').snapshotChanges().pipe()
    return of(result)
  }
}
