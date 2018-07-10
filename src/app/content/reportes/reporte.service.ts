import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  url: String = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }
  getAllSolicitudes() {
    return this.http.get(this.url + 'solicitudes/').toPromise();
  }
}