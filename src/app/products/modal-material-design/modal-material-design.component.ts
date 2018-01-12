import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-modal-material-design',
  templateUrl: './modal-material-design.component.html',
  styleUrls: ['./modal-material-design.component.css']
})
export class ModalMaterialDesignComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalMaterialDesignComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
