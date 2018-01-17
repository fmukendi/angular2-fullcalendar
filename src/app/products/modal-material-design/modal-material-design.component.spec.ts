import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMaterialDesignComponent } from './modal-material-design.component';

import {MatCardModule} from '@angular/material/card';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

describe('ModalMaterialDesignComponent', () => {
  let component: ModalMaterialDesignComponent;
  let fixture: ComponentFixture<ModalMaterialDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalMaterialDesignComponent
      ],
      providers: [
        MatDialog, MatDialogRef
      ],
      imports: [
        MatCardModule
      ]

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
