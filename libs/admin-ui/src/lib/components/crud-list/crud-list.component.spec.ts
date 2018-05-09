import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CrudListComponent } from './crud-list.component'

describe('CrudComponent', () => {
  let component: CrudListComponent
  let fixture: ComponentFixture<CrudListComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CrudListComponent],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
