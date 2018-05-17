import { async, TestBed } from '@angular/core/testing'
import { SiteApiModule } from './site-api.module'

describe('SiteApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SiteApiModule],
    }).compileComponents()
  }))

  it('should create', () => {
    expect(SiteApiModule).toBeDefined()
  })
})
