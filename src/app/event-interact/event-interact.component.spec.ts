import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventInteractComponent } from './event-interact.component';

describe('EventInteractComponent', () => {
  let component: EventInteractComponent;
  let fixture: ComponentFixture<EventInteractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventInteractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventInteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
