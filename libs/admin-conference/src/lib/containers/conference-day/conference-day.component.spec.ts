import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceDayComponent } from './conference-day.component';

describe('ConferenceDayComponent', () => {
  let component: ConferenceDayComponent;
  let fixture: ComponentFixture<ConferenceDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
