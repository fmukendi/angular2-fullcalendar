import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css']
})
export class ModalProductComponent implements OnInit {

  title: string;
  list: any[] = [];
  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

}
