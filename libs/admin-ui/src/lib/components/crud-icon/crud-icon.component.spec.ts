import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudIconComponent } from './crud-icon.component';

describe('CrudIconComponent', () => {
  let component: CrudIconComponent;
  let fixture: ComponentFixture<CrudIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
