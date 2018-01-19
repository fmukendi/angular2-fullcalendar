import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovingEventsComponent } from './removing-events.component';

describe('RemovingEventsComponent', () => {
  let component: RemovingEventsComponent;
  let fixture: ComponentFixture<RemovingEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovingEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovingEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
