import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemExportComponent } from './system-export.component';

describe('SystemExportComponent', () => {
  let component: SystemExportComponent;
  let fixture: ComponentFixture<SystemExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
