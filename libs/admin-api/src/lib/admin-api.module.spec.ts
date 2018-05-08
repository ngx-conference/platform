import { async, TestBed } from '@angular/core/testing';
import { AdminApiModule } from './admin-api.module';

describe('AdminApiModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminApiModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AdminApiModule).toBeDefined();
  });
});
