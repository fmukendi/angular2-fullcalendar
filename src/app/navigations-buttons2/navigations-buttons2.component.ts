import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigations-buttons2',
  templateUrl: './navigations-buttons2.component.html',
  styleUrls: ['./navigations-buttons2.component.css']
})
export class NavigationsButtons2Component implements OnInit {

  calendarOptions: Object = { // Start of options
    header: {
      left: 'prevYear,nextYear',
      center: 'title',
      right: 'today,month,agendaDay,agendaWeek prev,next'
    }
  }; // End of options


  constructor() { }

  ngOnInit() {
  }

}
