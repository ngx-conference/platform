import { async, TestBed } from '@angular/core/testing'
import { SiteConferencePickerModule } from './site-conference-picker.module'

describe('SiteConferencePickerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SiteConferencePickerModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(SiteConferencePickerModule).toBeDefined()
  })
})
