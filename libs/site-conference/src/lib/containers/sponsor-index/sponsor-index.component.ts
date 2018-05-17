import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'lib-sponsor-index',
  template: `
    <h3 class="mb-3">Sponsors</h3>
    <div class="row">
      <div class="col-md-4" *ngFor="let sponsor of sponsors">
        <div class="card mb-3">
          <div class="card-header">
            <h4 class="card-title">{{sponsor.title}}</h4>
          </div>
          <div class="card-body">
            <p class="card-text my-2">
              <a href="{{sponsor.homepage}}">{{sponsor.homepage}}</a>
            </p>
            <p class="card-text my-2">{{sponsor.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="!sponsors.length">
      <div class="alert alert-info">No sponsors found... :(</div>
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
export class SponsorIndexComponent implements OnInit {
  public sponsors: any[]

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sponsors = this.route.snapshot.data['sponsors']
  }
}
