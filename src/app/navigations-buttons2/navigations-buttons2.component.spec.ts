import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationsButtons2Component } from './navigations-buttons2.component';

describe('NavigationsButtons2Component', () => {
  let component: NavigationsButtons2Component;
  let fixture: ComponentFixture<NavigationsButtons2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationsButtons2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationsButtons2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
