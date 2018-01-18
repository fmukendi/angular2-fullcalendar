import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayImages4Component } from './display-images4.component';

describe('DisplayImages4Component', () => {
  let component: DisplayImages4Component;
  let fixture: ComponentFixture<DisplayImages4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayImages4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayImages4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
