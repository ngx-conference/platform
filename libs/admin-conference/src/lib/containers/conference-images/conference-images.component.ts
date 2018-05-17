import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FirebaseCrudService } from '@ngx-conference/admin-api'
import { ConferenceService } from '@ngx-conference/admin-conference/src/lib/services/conference.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'lib-conference-images',
  template: `
    <ui-page-title title="Images" icon="images"></ui-page-title>

    <div class="grid-container">
      <mat-grid-list cols="3">
        <mat-grid-tile *ngIf="loading" [colspan]="3">
          <ui-loading></ui-loading>
        </mat-grid-tile>
        <mat-grid-tile *ngIf="!loading" [colspan]="1">
          <ui-image-upload [parentId]="conference.id" parentCollection="Conferences"  [crud]="crud"></ui-image-upload>
        </mat-grid-tile>
        <mat-grid-tile *ngFor="let image of images" [colspan]="1" [rowspan]="1">
          <ui-grid-tile [data]="image" (action)="handleAction($event)" [buttons]="buttons">
            <img *ngIf="image.url" [src]="image.url" alt="">
          </ui-grid-tile>
        </mat-grid-tile>
      </mat-grid-list>
    </div>
  `,
  styles: [`
    img {
      max-width: 100%;
      height: auto;
    }
    .grid-container {
      margin: 20px;
    }
  `],
})
export class ConferenceImagesComponent implements OnInit, OnDestroy {
  public images: any[]
  public loading: boolean
  public buttons = [
    {
      icon: 'delete',
      action: 'DELETE',
    },
  ]
  public conference: any
  private sub: Subscription
  private crud: FirebaseCrudService

  constructor(
    public service: ConferenceService,
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe(
        data => {
          this.conference = data.conference
          this.crud = new FirebaseCrudService(this.service.db, 'Images', 'Conferences', this.conference.id)
          this.getImages()
        }
      )
    this.getImages()
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }

  getImages() {
    this.loading = true
    this.sub = this.crud.getRelatedItems('Images')
      .subscribe(images => {
        this.loading = false
        this.images = images
      })
  }

  delete(item) {
    if (window.confirm('Delete this item?')) {
      console.log(item)
      this.service.deleteFile(item)
    }
  }

  handleAction({type, payload}) {
    switch (type) {
      case 'DELETE':
        return this.delete(payload)
      default:
        console.log('Unknown type', type, payload)
    }
  }

}
