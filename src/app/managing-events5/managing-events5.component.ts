import { Component, OnInit } from '@angular/core';
import { MomentModule } from 'angular2-moment';
import { DateFormatPipe } from 'angular2-moment';
import { LocalTimePipe } from 'angular2-moment/local.pipe';
import * as moment from 'moment';


@Component({
  selector: 'app-managing-events5',
  templateUrl: './managing-events5.component.html',
  styleUrls: ['./managing-events5.component.css']
})
export class ManagingEvents5Component implements OnInit {

  events_array: Array<Object> = [{
    title: 'Event 1',
    // Set to 1st of the month at 12:00 am
    start: moment().startOf('month'),
    // Set to en the 1st of the month at 1:30 am
    end: moment().startOf('month').add(90, 'minutes'),
    color: 'red'
  }, {
    title: 'Event 2',
    // Set to 1st of the month at 12:00 am
    start: moment().startOf('month').add(1, 'days'),
    // Set to end the 1st of the month at 3:00 am
    end: moment().startOf('month').add({
      'days': 1,
      'hours': 3
    }),
    color: 'green'
  }, {
    title: 'Multi-day event',
    // Set to start the 1st of the month
    start: moment().startOf('month'),
    // Set to end one week after the start of the month
    end: moment().startOf('month').add(1, 'weeks'),
    color: 'blue',
    // This is an all-day event
    allDay: true
  },

  ];

  calendarOptions: Object = { // Start of options
    header: {
        left: 'title',
        center: '',
        right: 'today,month,agendaDay,agendaWeek prev,next'
    },

    events: this.events_array

}; // End of options; // End of options

  constructor(public dfp: DateFormatPipe, public lt: LocalTimePipe) { }

  ngOnInit() {
    this.testMoment();
  }

  testMoment(): void {
    const raw: Date = new Date();
    const formattedDate = this.dfp.transform(raw, 'D MM YYYY');
    const localTime = this.lt.transform(raw).startOf('month');
    // console.log(localTime);
  }

  /* moment(): moment.Moment {
    const raw: Date = new Date();
    const formattedDate = this.dfp.transform(raw, 'D MM YYYY');
    const localTime: moment.Moment = this.lt.transform(raw);
    console.log(localTime);
    return localTime;
  } */

}
