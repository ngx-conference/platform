import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTalkComponent } from './icon-talk.component';

describe('IconTalkComponent', () => {
  let component: IconTalkComponent;
  let fixture: ComponentFixture<IconTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
