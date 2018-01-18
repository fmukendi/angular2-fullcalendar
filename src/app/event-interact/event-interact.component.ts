
import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-event-interact',
  templateUrl: './event-interact.component.html',
  styleUrls: ['./event-interact.component.css']
})
export class EventInteractComponent implements OnInit, AfterViewInit {

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  calendarOptions: Object = {
    // Start of calendar options
    header: {
      left: 'title',
      center: '',
      right: 'today,month,agendaDay,agendaWeek prev,next'
    },

    // Make possible to respond to clicks and selections
    selectable: true,

    // This is the callback that will be triggered when a selection is made.
    // It gets start and end date/time as part of its arguments
    select: function (start, end, jsEvent, view) {

      // Ask for a title. If empty it will default to 'New event'
      const title = prompt('Enter a title for this event', 'New event');

      // If did not pressed Cancel button
      if (title !== null) {
        // Create event
        const event = {
          title: title.trim() !== '' ? title : 'New event',
          start: start,
          end: end
        };


        // Push event into fullCalendar's array of events
        // and displays it. The last argument is the
        // 'stick' value. If set to true the event
        // will 'stick' even after you move to other
        // year, month, day or week.

        this.myCalendar.fullCalendar('renderEvent', event, true);
      }
      // Whatever happens, unselect selection
      this.myCalendar.fullCalendar('unselect');

    } // End select callback
  }; // End of calendar options; // End of options


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() { }

  public fullCalendarRenderEvent = (event: any): void => {
    this.myCalendar.fullCalendar('renderEvent', event, true);
  }

  public fullCalendarUnselect = (): void => {
    this.myCalendar.fullCalendar('unselect');
  }

  /* public fullCalendarselect = (start, end, jsEvent, view): void => {
    this.myCalendar.fullCalendar('unselect');
  } */

}
