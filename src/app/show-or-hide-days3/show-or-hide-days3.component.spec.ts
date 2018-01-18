import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrHideDays3Component } from './show-or-hide-days3.component';

describe('ShowOrHideDays3Component', () => {
  let component: ShowOrHideDays3Component;
  let fixture: ComponentFixture<ShowOrHideDays3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowOrHideDays3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowOrHideDays3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
