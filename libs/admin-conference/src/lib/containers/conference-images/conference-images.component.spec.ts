import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceImagesComponent } from './conference-images.component';

describe('ConferenceImagesComponent', () => {
  let component: ConferenceImagesComponent;
  let fixture: ComponentFixture<ConferenceImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
