import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  url: String = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  saveSolicitante(data: any) {
    return this.http.post(this.url + '/solicitudes', data).toPromise();
  }
}
