import { async, TestBed } from '@angular/core/testing'
import { AdminSharedModule } from './admin-shared.module'

describe('AdminSharedModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminSharedModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminSharedModule).toBeDefined()
  })
})
