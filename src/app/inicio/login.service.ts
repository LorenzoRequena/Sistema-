import { Injectable } from '@angular/core';
import {  } from "";
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
}

