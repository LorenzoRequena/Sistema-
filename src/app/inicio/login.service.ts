import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: String = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  saveUser(data: any): Observable<any> {
    return this.http.post(this.url + '/user', data);
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(this.url + '/user/login', data);
  }
}

