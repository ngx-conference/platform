
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalksTableComponent } from './talks-table.component';

describe('TalksTableComponent', () => {
  let component: TalksTableComponent;
  let fixture: ComponentFixture<TalksTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
