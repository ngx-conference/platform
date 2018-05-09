import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudModalComponent } from './crud-modal.component'

describe('CrudModalComponent', () => {
  let component: CrudModalComponent;
  let fixture: ComponentFixture<CrudModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
