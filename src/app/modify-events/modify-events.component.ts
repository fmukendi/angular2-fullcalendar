import { CalendarComponent } from 'ap-angular2-fullcalendar/src/calendar/calendar';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-modify-events',
  templateUrl: './modify-events.component.html',
  styleUrls: ['./modify-events.component.css']
})
export class ModifyEventsComponent implements OnInit {

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  calendarOptions: Object;

  constructor() { }

  ngOnInit() {
    const that = this;
    this.calendarOptions = {
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
        if (title != null) {
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

          that.fullCalendarRenderEvent(event);
        }
        // Whatever happens, unselect selection
        that.fullCalendarRenderEvent(event);

      }, // End select callback

      // Make events editable, globally
      editable: true,

      // Callback triggered when we click on an event

      eventClick: function (event, jsEvent, view) {
        // Ask for a title. If empty it will default to 'New event'
        const newTitle = prompt('Enter a new title for this event', event.title);

        // If did not pressed Cancel button
        if (newTitle != null) {
          // Update event
          event.title = newTitle.trim() !== '' ? newTitle : event.title;

          // Call the 'updateEvent' method
          that.fullCalendarUpdate(event);

        }
      } // End callback eventClick
    }; // End of calendar options
  }

  public fullCalendarRenderEvent = (event: any): void => {
    this.myCalendar.fullCalendar('renderEvent', event, true);
  }

  public fullCalendarUnselect = (): void => {
    this.myCalendar.fullCalendar('unselect');
  }

  public fullCalendarUpdate = (event: any): void => {
    this.myCalendar.fullCalendar('updateEvent', event);
  }

}
