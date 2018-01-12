
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalProductComponent } from './modal-product/modal-product.component';
import {MatDialog} from '@angular/material';
import { ModalMaterialDesignComponent } from './modal-material-design/modal-material-design.component';


@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit, OnDestroy {
    products: any[];
    subscription: Subscription;
    bsModalRef: BsModalRef;

    minDate = new Date(2017, 5, 10);
    maxDate = new Date(2018, 9, 15);
    bsValue: Date = new Date();
    bsRangeValue: any = [new Date(2017, 7, 4), new Date(2017, 7, 20)];

    @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

    animal: string;
    name: string;
    calendarOptions: Object = {
        height: 'parent',
        fixedWeekCount : false,
        defaultDate: new Date(),
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        defaultView: 'agendaWeek',
        contentHeight : 'auto',
        events: [
          {
            title: 'All Day Event',
            start: '2016-09-01'
          },
          {
            title: 'Long Event',
            start: '2016-09-07',
            end: '2016-09-10'
          }
        ]
      };

    constructor(private modalService: BsModalService, public dialog: MatDialog) { }
    ngOnInit() {}
    ngOnDestroy() {}

    onCalendarInit = (value: any): void => {

    }

    changeCalendarView(view) {
      this.myCalendar.fullCalendar('changeView', view);
    }

    public goto (nextOrPrev) {
       this.myCalendar.fullCalendar(nextOrPrev);
    }

    goPrev = (value: any): void => {
      this.myCalendar.fullCalendar('prev');
    }

    goNext = (value: any): void => {
      this.myCalendar.fullCalendar('next');
    }

    setNewDate = (): void => {
      console.log(this.bsValue);

      this.myCalendar.fullCalendar( 'gotoDate', this.bsValue );
    }

    openModalWithComponent() {
      const list = [
        'Open a modal with component',
        'Pass your data',
        'Do something else',
        '...'
      ];
      this.bsModalRef = this.modalService.show(ModalProductComponent);
      this.bsModalRef.content.title = 'Modal with component';
      this.bsModalRef.content.list = list;
      setTimeout(() => {
        list.push('PROFIT!!!');
      }, 2000);
    }

    openModalMaterialDesginComponent(): void {
      let dialogRef = this.dialog.open(ModalMaterialDesignComponent, {
        width: '100%',
        data: { name: this.name, animal: this.animal }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.animal = result;
      });
    }
}
