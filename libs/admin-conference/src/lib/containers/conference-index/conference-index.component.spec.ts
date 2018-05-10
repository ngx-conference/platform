import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceIndexComponent } from './conference-index.component';

describe('ConferenceIndexComponent', () => {
  let component: ConferenceIndexComponent;
  let fixture: ComponentFixture<ConferenceIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
