import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSettingsGeneralComponent } from './conference-settings-general.component';

describe('ConferenceSettingsGeneralComponent', () => {
  let component: ConferenceSettingsGeneralComponent;
  let fixture: ComponentFixture<ConferenceSettingsGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSettingsGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSettingsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
