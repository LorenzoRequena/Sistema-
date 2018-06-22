import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }
  saveSolicitante(data: any): Observable<any> {
    return this.http.post('/solicitudes', data)
  }
}
