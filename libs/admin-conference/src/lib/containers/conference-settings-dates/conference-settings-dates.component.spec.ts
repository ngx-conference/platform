import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSettingsDatesComponent } from './conference-settings-dates.component';

describe('ConferenceSettingsDatesComponent', () => {
  let component: ConferenceSettingsDatesComponent;
  let fixture: ComponentFixture<ConferenceSettingsDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSettingsDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSettingsDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
