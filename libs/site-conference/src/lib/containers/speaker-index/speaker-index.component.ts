import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'lib-speaker-index',
  template: `
    <h3 class="mb-3">Speakers</h3>
    <div class="row">
      <div class="col-md-4" *ngFor="let speaker of speakers">
        <div class="card mb-3">
          <div class="card-header">
            <h4 class="card-title">{{speaker.name}}</h4>
          </div>
          <img [attr.src]="speaker.avatar" [attr.alt]="speaker.name" class="card-img" />
          <div class="card-body">
            <p class="card-text my-2">{{speaker.bio}}</p>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="!speakers.length">
      <div class="alert alert-info">No speakers found... :(</div>
    </div>
  `,
  styles: [
    `
    .card-body {
      min-height: 100px;
    }
  `,
  ],
})
export class SpeakerIndexComponent implements OnInit {
  public speakers: any[]

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.speakers = this.route.snapshot.data['speakers']
  }
}
