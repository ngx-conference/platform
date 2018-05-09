import { async, TestBed } from '@angular/core/testing'
import { AdminAuthModule } from './admin-auth.module'

describe('AdminAuthModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminAuthModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminAuthModule).toBeDefined()
  })
})
