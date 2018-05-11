import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemImportComponent } from './system-import.component';

describe('SystemImportComponent', () => {
  let component: SystemImportComponent;
  let fixture: ComponentFixture<SystemImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
