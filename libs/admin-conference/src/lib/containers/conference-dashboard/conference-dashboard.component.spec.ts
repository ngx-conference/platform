import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ConferenceDashboardComponent } from './conference-dashboard.component'

describe('ConferenceDashboardComponent', () => {
  let component: ConferenceDashboardComponent
  let fixture: ComponentFixture<ConferenceDashboardComponent>

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ConferenceDashboardComponent],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceDashboardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
