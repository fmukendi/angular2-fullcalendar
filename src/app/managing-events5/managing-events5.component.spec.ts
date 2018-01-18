import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingEvents5Component } from './managing-events5.component';

describe('ManagingEvents5Component', () => {
  let component: ManagingEvents5Component;
  let fixture: ComponentFixture<ManagingEvents5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagingEvents5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingEvents5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
