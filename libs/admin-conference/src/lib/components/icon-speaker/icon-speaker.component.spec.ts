import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSpeakerComponent } from './icon-speaker.component';

describe('IconSpeakerComponent', () => {
  let component: IconSpeakerComponent;
  let fixture: ComponentFixture<IconSpeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSpeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
