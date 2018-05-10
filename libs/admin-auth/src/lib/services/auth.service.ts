import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore'

import { firebase } from '@firebase/app';

import { AngularFireAuth } from 'angularfire2/auth'

import { Observable, of } from 'rxjs'
import { fromPromise } from 'rxjs/internal/observable/fromPromise'
import { switchMap } from 'rxjs/internal/operators'
import { UiService } from '@ngx-conference/admin-ui'
// import GoogleAuthProvider = firebase.auth.GoogleAuthProvider

export interface FireUser {
  id: string
  name: string
  email: string
  avatar?: string
  avatarText?: string
  admin?: boolean
  active?: boolean
  requestAccess?: number
}

const defaultProfile = user => {
  const providerData = user.providerData[0]

  const { displayName, email, photoURL } = providerData

  const profile = {
    id: user.uid,
    name: displayName,
    email: user.email || email,
    avatar: photoURL,
  }
  return profile
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly collection = 'Users'

  public authState$: Observable<any>
  public user$: Observable<FireUser>

  private _isLoggedIn = false
  public get isLoggedIn() {
    return this._isLoggedIn
  }

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private ui: UiService,
  ) {
    this._observeState()
    // this.afAuth.auth.app
    this.ui.user$ = this.user$
  }

  /**
   * Method that handles observing the state
   * @private
   */
  private _observeState() {
    // Set the main authState
    this.authState$ = this.afAuth.authState
    // Set the user profile
    this.user$ = this.authState$.pipe(
      switchMap(user => {
        if (user) {
          this._isLoggedIn = true
          return this._getDocRef(user.uid).valueChanges()
        } else {
          this._isLoggedIn = false
          return of(null)
        }
      })
    )
  }

  /**
   * Helper to get a reference to the AngularFirestoreDocument
   * @param id
   * @returns {AngularFirestoreDocument<>}
   * @private
   */
  private _getDocRef(id): AngularFirestoreDocument<FireUser> {
    return this.db.doc<FireUser>(`${this.collection}/${id}`)
  }

  /**
   * Method that updates the User profile
   * @param user
   * @returns {Promise<void>}
   * @private
   */
  private _updateProfile(user) {
    return this._getDocRef(user.uid).set(defaultProfile(user), { merge: true })
  }

  /**
   * Perform the actual login with the given provider
   * @param provider
   * @returns {Promise<any>}
   * @private
   */
  private _login(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
  }

  /**
   * Perform the login with the Github provider
   * @returns {Promise<void>}
   */
  public loginGithub() {
    return this._login(new firebase.auth.GithubAuthProvider()).then(credentials =>
      this._updateProfile(credentials.user)
    )
  }

  /**
   * Perform the login with the Google provider
   * @returns {Promise<void>}
   */
  public loginGoogle() {
    return this._login(new firebase.auth.GoogleAuthProvider()).then(credentials =>
      this._updateProfile(credentials.user)
    )
  }

  public get providers() {
    return [
      {
        id: 'github',
        icon: 'github',
        name: 'GitHub',
      },
      {
        id: 'google',
        icon: 'google',
        name: 'Google',
      },
    ]
  }

  /**
   * Public login method
   * @param {"google"} provider
   * @returns {any}
   */
  public login(provider: 'google' | 'github' = 'google') {
    switch (provider) {
      case 'github':
        return fromPromise(this.loginGithub())
      case 'google':
        return fromPromise(this.loginGoogle())
      default:
        console.log('Unknown provider', provider)
        return of(null)
    }
  }

  /**
   * Public login method
   * @returns {Observable<any>}
   */
  public logout() {
    return fromPromise(this.afAuth.auth.signOut())
  }

  public requestAccess(userId: string) {
    return fromPromise(this._getDocRef(userId).update({ requestAccess: Date.now() }))
  }
}
