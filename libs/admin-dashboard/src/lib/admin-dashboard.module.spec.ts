import { async, TestBed } from '@angular/core/testing';
import { AdminDashboardModule } from './admin-dashboard.module';

describe('AdminDashboardModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [AdminDashboardModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(AdminDashboardModule).toBeDefined();
  });
});
