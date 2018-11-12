import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: String = 'http://localhost:3000';
  isLogged = new BehaviorSubject(false)
  userData = new BehaviorSubject({})
   constructor(private http: HttpClient) { }
  saveUser(data: any): Observable<any> {
    return this.http.post(this.url + '/user', data);
  }
  isUserLogged(){
    return this.isLogged.value
  }
  loginUser(data: any) {
    return this.http.post(this.url + '/user/login', data).toPromise();
  }
}

