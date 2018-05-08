import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { TalksIndexComponent } from './talks-index.component'

describe('TalksIndexComponent', () => {
  let component: TalksIndexComponent
  let fixture: ComponentFixture<TalksIndexComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TalksIndexComponent],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
