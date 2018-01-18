import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-or-hide-days3',
  templateUrl: './show-or-hide-days3.component.html',
  styleUrls: ['./show-or-hide-days3.component.css']
})
export class ShowOrHideDays3Component implements OnInit {
  calendarOptions: Object = { // Start of options
    // Do not show Saturday/Sunday
    weekends: false,

    // Hide Wednesday (3) and Friday (5). Week starts with
    // Sunday (0)
    hiddenDays: [3, 5],

    // Calendar header and navigation buttons
    header: {
        left: 'title',
        center: '',
        right: 'today,month,agendaDay,agendaWeek prev,next'
    },

}; // End of options; // End of options
  constructor() { }

  ngOnInit() {
  }

}
