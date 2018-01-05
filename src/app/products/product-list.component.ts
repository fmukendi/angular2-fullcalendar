import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit, OnDestroy {
    products: any[];
    subscription: Subscription;

    constructor() { }
    ngOnInit() {}
    ngOnDestroy() {}
}
