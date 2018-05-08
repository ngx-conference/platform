import { async, TestBed } from '@angular/core/testing'
import { AdminSpeakersModule } from './admin-speakers.module'

describe('AdminSpeakersModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminSpeakersModule],
      }).compileComponents()
    }),
  )

  it('should create', () => {
    expect(AdminSpeakersModule).toBeDefined()
  })
})
