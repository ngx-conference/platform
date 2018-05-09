import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkModalComponent } from './talk-modal.component';

describe('TalkModalComponent', () => {
  let component: TalkModalComponent;
  let fixture: ComponentFixture<TalkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
