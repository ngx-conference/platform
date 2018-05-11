import { async, TestBed } from '@angular/core/testing'
import { AdminSystemModule } from './admin-system.module'

describe('AdminSystemModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminSystemModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminSystemModule).toBeDefined()
  })
})
