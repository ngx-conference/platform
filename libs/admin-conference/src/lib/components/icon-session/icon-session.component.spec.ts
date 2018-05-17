import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSessionComponent } from './icon-session.component';

describe('IconSessionComponent', () => {
  let component: IconSessionComponent;
  let fixture: ComponentFixture<IconSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
