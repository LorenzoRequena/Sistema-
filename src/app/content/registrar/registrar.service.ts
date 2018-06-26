import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }
  saveSolicitante(data: any) {
    return this.http.get('/solicitudes/last').toPromise().then(expediente => {
      if (expediente) {
        this.http.post('/solicitudes', {...data, expediente});
      } else {
        return null;
      }
    });
  }
}
