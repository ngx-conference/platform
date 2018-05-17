import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorIndexComponent } from './sponsor-index.component';

describe('SponsorIndexComponent', () => {
  let component: SponsorIndexComponent;
  let fixture: ComponentFixture<SponsorIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
