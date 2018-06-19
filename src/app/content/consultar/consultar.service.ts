import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  constructor(private http: HttpClient) { }
  searchSolicitantes(cedula:any):Observable<any>{
    console.log(cedula);
    return this.http.get('/solicitante/bycedula/' + cedula);
  }
}
