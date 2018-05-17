import { async, TestBed } from '@angular/core/testing'
import { SiteUiModule } from './site-ui.module'

describe('SiteUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SiteUiModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(SiteUiModule).toBeDefined()
  })
})
