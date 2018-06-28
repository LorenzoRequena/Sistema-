import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  
  constructor(private http: HttpClient) { }
   

  url: String = 'http://localhost:3000';
  searchSolicitud(clave: any, by:any) {
    return this.http.get(this.url + '/solicitudes/by'+by+'/' + clave).toPromise();
  }
  updatesolicitud(data,expediente){
    console.log(data,expediente)
   return this.http.post(this.url + '/solicitudes/' + expediente,data);
  }
}

