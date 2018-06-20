import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  saveUser(data: any): Observable<any> {
    return this.http.post('/user', data)
  }

  loginUser(data: any): Observable<any> {
    return this.http.post('/user/login', data)
  }
}

