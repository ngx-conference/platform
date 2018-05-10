import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AngularFirestore } from 'angularfire2/firestore'

@Component({
  selector: 'ui-crud',
  template: `
    <ui-crud-list [db]="db"
                  [title]="crud.title"
                  [icon]="crud.icon"
                  [iconComponent]="crud.iconComponent"
                  [collectionId]="crud.collectionId"
                  [parentId]="parent.id"
                  [fields]="crud.fields">
    </ui-crud-list>
  `,
})
export class CrudComponent {
  public crud: any
  public parent: any
  public db: AngularFirestore

  constructor(private route: ActivatedRoute) {
    this.route.data
      .subscribe((data) => {
        this.crud = data.crud
        this.db = data.db
        this.parent = data[data.crud.parent]
      })
  }
}
