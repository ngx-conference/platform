import { async, TestBed } from '@angular/core/testing'
import { AdminTalksModule } from './admin-talks.module'

describe('AdminTalksModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminTalksModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminTalksModule).toBeDefined()
  })
})
