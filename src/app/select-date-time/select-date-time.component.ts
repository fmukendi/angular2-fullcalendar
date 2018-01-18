import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-date-time',
  templateUrl: './select-date-time.component.html',
  styleUrls: ['./select-date-time.component.css']
})
export class SelectDateTimeComponent implements OnInit {
  calendarOptions: Object = { // Start of calendar options
    header: {
      left: 'title',
      center: '',
      right: 'today,month,agendaDay,agendaWeek prev,next'
    },

    // Make possible to respond to clicks and selections
    selectable: true,

    // This is the callback that will be triggered when a selection is made
    select: function (start, end, jsEvent, view) {
      alert(start
        .format('MM/DD/YYYY hh:mm a')
        + 'to'
        + end.format('MM/DD/YYYY hh:mm a')
        + 'in view' + view.name);

    }

  }; // End of options; // End of options
  constructor() { }

  ngOnInit() {
  }

}
