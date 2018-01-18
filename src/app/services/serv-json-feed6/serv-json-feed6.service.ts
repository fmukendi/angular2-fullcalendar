import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


@Injectable()
export class ServJsonFeed6Service {

  private _url: string = './api/events/events1.json';

  constructor(private _http: HttpClient) {


  }
  public getEventsLocal(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear()
                       + '-' + (dateObj.getUTCMonth() + 1);
    let data: any = [{
      title: 'All Day Event',
      start: yearMonth + '-01'
    },
    {
      title: 'Long Event',
      start: yearMonth + '-07',
      end: yearMonth + '-10'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: yearMonth + '-09T16:00:00'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: yearMonth + '-16T16:00:00'
    },
    {
      title: 'Conference',
      start: yearMonth + '-11',
      end: yearMonth + '-13'
    },
    {
      title: 'Meeting',
      start: yearMonth + '-12T10:30:00',
      end: yearMonth + '-12T12:30:00'
    },
    {
      title: 'Lunch',
      start: yearMonth + '-12T12:00:00'
    },
    {
      title: 'Meeting',
      start: yearMonth + '-12T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: yearMonth + '-12T17:30:00'
    },
    {
      title: 'Dinner',
      start: yearMonth + '-12T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: yearMonth + '-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      start: yearMonth + '-28'
    }];
    return Observable.of(data);
  }

  getEvents(): Observable<any[]> {
    return this._http.get<any[]>(this._url)
      .do(data => null)
      .catch(this.handleError);
  }

  getEvent(id: number): Observable<any> {
    return this._http.get<any[]>(this._url)
      .map(res => {
        return res.find(x => x.id === id);
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
  }

}
