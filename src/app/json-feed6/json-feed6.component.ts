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
  calendarOptions: Object;

  constructor(private _serv: ServJsonFeed6Service) { }

  ngOnInit() {
    this._serv.getEventsLocal().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
    });
  }

}
