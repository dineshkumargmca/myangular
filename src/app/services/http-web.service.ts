import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpWebService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  sendMail(test): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {title: 'test1111', body: 'testcontent'});
  }
}
