import { async, TestBed } from '@angular/core/testing'
import { SiteConferenceModule } from './site-conference.module'

describe('SiteConferenceModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SiteConferenceModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(SiteConferenceModule).toBeDefined()
  })
})
