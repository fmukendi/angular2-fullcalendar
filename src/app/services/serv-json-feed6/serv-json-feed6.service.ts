import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';


@Injectable()
export class ServJsonFeed6Service {

  private _url: string = './api/events/events1.json';

  constructor(private _http: HttpClient) {


  }
  getEvents(): Observable<any[]> {
    return this._http.get<any[]>(this._url)
              .do(data => null )
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
