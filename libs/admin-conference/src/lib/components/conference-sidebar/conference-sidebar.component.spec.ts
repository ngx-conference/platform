import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSidebarComponent } from './conference-sidebar.component';

describe('ConferenceSidebarComponent', () => {
  let component: ConferenceSidebarComponent;
  let fixture: ComponentFixture<ConferenceSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
