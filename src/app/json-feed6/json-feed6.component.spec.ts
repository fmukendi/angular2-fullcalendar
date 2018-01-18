import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFeed6Component } from './json-feed6.component';

describe('JsonFeed6Component', () => {
  let component: JsonFeed6Component;
  let fixture: ComponentFixture<JsonFeed6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonFeed6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonFeed6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
