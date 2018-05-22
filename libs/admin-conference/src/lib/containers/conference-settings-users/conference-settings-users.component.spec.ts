import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSettingsUsersComponent } from './conference-settings-users.component';

describe('ConferenceSettingsDatesComponent', () => {
  let component: ConferenceSettingsUsersComponent;
  let fixture: ComponentFixture<ConferenceSettingsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSettingsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSettingsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
