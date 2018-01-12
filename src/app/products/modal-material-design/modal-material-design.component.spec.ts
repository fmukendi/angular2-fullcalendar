import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaterialDesignComponent } from './modal-material-design.component';

describe('ModalMaterialDesignComponent', () => {
  let component: ModalMaterialDesignComponent;
  let fixture: ComponentFixture<ModalMaterialDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMaterialDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMaterialDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
