import { async, TestBed } from '@angular/core/testing'
import { AdminSponsorsModule } from './admin-sponsors.module'

describe('AdminSponsorsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminSponsorsModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminSponsorsModule).toBeDefined()
  })
})
