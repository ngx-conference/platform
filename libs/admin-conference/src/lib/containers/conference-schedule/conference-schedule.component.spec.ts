import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceScheduleComponent } from './conference-schedule.component';

describe('ConferenceScheduleComponent', () => {
  let component: ConferenceScheduleComponent;
  let fixture: ComponentFixture<ConferenceScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
