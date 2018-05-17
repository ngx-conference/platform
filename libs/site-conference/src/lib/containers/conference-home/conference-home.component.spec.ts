import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceHomeComponent } from './conference-home.component';

describe('ConferenceHomeComponent', () => {
  let component: ConferenceHomeComponent;
  let fixture: ComponentFixture<ConferenceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
