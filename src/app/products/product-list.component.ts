
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
@Component({
    moduleId: module.id.toString(),
    templateUrl: 'product-list.component.html'
})

export class ProductListComponent implements OnInit, OnDestroy {
    products: any[];
    subscription: Subscription;

    @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

    calendarOptions: Object = {
        height: 'parent',
        fixedWeekCount : false,
        defaultDate: new Date(),
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        defaultView: 'agendaWeek',
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

    constructor() { }
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
}
