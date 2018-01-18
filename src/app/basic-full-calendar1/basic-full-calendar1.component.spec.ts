import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFullCalendar1Component } from './basic-full-calendar1.component';

describe('BasicFullCalendar1Component', () => {
  let component: BasicFullCalendar1Component;
  let fixture: ComponentFixture<BasicFullCalendar1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFullCalendar1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFullCalendar1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
