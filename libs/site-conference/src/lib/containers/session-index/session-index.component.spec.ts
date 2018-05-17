import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionIndexComponent } from './session-index.component';

describe('SessionIndexComponent', () => {
  let component: SessionIndexComponent;
  let fixture: ComponentFixture<SessionIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
