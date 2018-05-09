import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, Resolve } from '@angular/router'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map'

import { UserModel } from '../collections/user.model'
import { NoteModel } from '../collections/note.model'

const collections = {
  beers: UserModel,
  notes: NoteModel,
}

@Injectable()
export class CollectionResolver implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot) {
    let { collectionId } = route.params
    if (!collectionId || !collections[collectionId]) {
      collectionId = 'beers'
    }
    return of(collections[collectionId])
  }
}
