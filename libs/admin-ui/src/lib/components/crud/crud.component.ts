import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { map } from 'rxjs/internal/operators'

@Component({
  selector: 'ui-crud',
  template: `
    <ui-crud-list [title]="service.title" [icon]="service.icon"
                  [collectionId]="service.collectionId"
                  [displayField]="service.displayField"
                  [db]="service.db" [fields]="service.fields"></ui-crud-list>
  `,
})
export class CrudComponent {
  public service: any

  constructor(private route: ActivatedRoute) {
    this.route.data
      .pipe(
        map(data => data.service)
      )
      .subscribe(service => this.service = service)
  }
}
