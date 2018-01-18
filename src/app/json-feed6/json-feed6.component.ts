import { ServJsonFeed6Service } from './../services/serv-json-feed6/serv-json-feed6.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-json-feed6',
  templateUrl: './json-feed6.component.html',
  styleUrls: ['./json-feed6.component.css']
})
export class JsonFeed6Component implements OnInit {

  private url: String = './api/events/events1.json';
  private url2: String = '../../api/events/events1.json';
  calendarOptions: Object = { // Start of options
    header: {
      left: 'title',
      center: '',
      right: 'today,month,agendaDay,agendaWeek prev,next'
    },
    events: {
      url: this.url2 , // '/get_events',
      type: 'POST',
      error: function () {
        alert('Error fetching events');
      }
    }
  }; // End of options; // End of options
  constructor(private _serv: ServJsonFeed6Service) { }

  ngOnInit() {
  }

}
