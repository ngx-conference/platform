import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { DataService, FirebaseDataService } from './services'

import { CollectionResolver } from './resolvers/collection.resolver'

import { ItemsIndexComponent } from './containers/items-index/items-index.component'

import { ItemListComponent } from './components/item-list/item-list.component'
import { ItemFieldComponent } from './components/item-field/item-field.component'
import { ItemModalComponent } from './components/item-modal/item-modal.component'
import { ItemFormComponent } from './components/item-form/item-form.component'

const routes: Routes = [
  {
    path: ':collectionId',
    resolve: { collection: CollectionResolver },
    data: { service: FirebaseDataService },
    children: [{ path: '', component: ItemsIndexComponent }],
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [ItemsIndexComponent, ItemFieldComponent, ItemListComponent, ItemModalComponent, ItemFormComponent],
  entryComponents: [ItemModalComponent],
  providers: [DataService, FirebaseDataService, CollectionResolver],
})
export class CrudModule {
  constructor(data: DataService, firebase: FirebaseDataService) {
    data.service = firebase
  }
}
