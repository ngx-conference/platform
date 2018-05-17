import { Component, Input } from '@angular/core'
import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Component({
  selector: 'ui-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  @Input() crud: FirebaseCrudService
  @Input() parentCollection: string
  @Input() parentId: string

  // Main task
  task: AngularFireUploadTask

  // Progress monitoring
  percentage: Observable<number>

  snapshot: Observable<any>

  // State for CSS toggling
  isHovering: boolean

  constructor(private storage: AngularFireStorage) {}

  toggleHover(event: boolean) {
    this.isHovering = event
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ')
      return
    }

    // The storage path
    const path = `${this.parentId}/${new Date().getTime()}_${file.name}`

    // Totally optional metadata
    const customMetadata = { parentId: this.parentId }

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges()

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          this.storage
            .ref(path)
            .getDownloadURL()
            .subscribe(url => {
              const imageDoc = Object.assign({}, customMetadata, {
                name: file.name,
                path,
                url,
                size: snap.totalBytes,
              })
              return this.crud.addItemRelation(this.parentId, 'Images', imageDoc)
            })
        }
      }),
    )
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    )
  }
}
