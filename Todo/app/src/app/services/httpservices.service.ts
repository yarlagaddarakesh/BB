import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

  constructor(private http: HttpClient) { }
  add(params: any): Observable<any> {
    return this.http.post(config.api_url + 'add', params);
  }
  list(): Observable<any> {
    return this.http.post(config.api_url + 'list', "");
  }
  todorow(_id: any): Observable<any> {
    return this.http.post(config.api_url + 'todorow/' + _id, "");
  }
  update(params: any): Observable<any> {
    return this.http.post(config.api_url + 'update', params);
  }
  delete(_id: any): Observable<any> {
    return this.http.post(config.api_url + 'delete/' + _id, "");

  }
}
