import { async, TestBed } from '@angular/core/testing'
import { AdminConferenceModule } from './admin-conference.module'

describe('AdminConferenceModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminConferenceModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminConferenceModule).toBeDefined()
  })
})
