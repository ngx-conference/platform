import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { SpeakersIndexComponent } from './dashboard-index.component'

describe('TalksIndexComponent', () => {
  let component: SpeakersIndexComponent
  let fixture: ComponentFixture<SpeakersIndexComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SpeakersIndexComponent],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakersIndexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
