import { async, TestBed } from '@angular/core/testing'
import { AdminUiModule } from './admin-ui.module'

describe('AdminUiModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminUiModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminUiModule).toBeDefined()
  })
})
