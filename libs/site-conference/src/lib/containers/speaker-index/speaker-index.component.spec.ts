import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerIndexComponent } from './speaker-index.component';

describe('SpeakerIndexComponent', () => {
  let component: SpeakerIndexComponent;
  let fixture: ComponentFixture<SpeakerIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakerIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
