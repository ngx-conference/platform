import { async, TestBed } from '@angular/core/testing'
import { AdminCoreModule } from './admin-core.module'

describe('AdminCoreModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminCoreModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminCoreModule).toBeDefined()
  })
})
