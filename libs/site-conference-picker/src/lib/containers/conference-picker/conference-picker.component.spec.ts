import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ConferencePickerComponent } from './conference-picker.component'

describe('ConferencePickerComponent', () => {
  let component: ConferencePickerComponent
  let fixture: ComponentFixture<ConferencePickerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConferencePickerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencePickerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
