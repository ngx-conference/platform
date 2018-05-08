import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SponsorsIndexComponent } from './sponsors-index.component'

describe('SponsorsIndexComponent', () => {
  let component: SponsorsIndexComponent
  let fixture: ComponentFixture<SponsorsIndexComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SponsorsIndexComponent],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorsIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
