import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSponsorComponent } from './icon-sponsor.component';

describe('IconSponsorComponent', () => {
  let component: IconSponsorComponent;
  let fixture: ComponentFixture<IconSponsorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSponsorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSponsorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
