import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceWizardComponent } from './conference-wizard.component';

describe('ConferenceWizardComponent', () => {
  let component: ConferenceWizardComponent;
  let fixture: ComponentFixture<ConferenceWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
