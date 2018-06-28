import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  constructor(private http: HttpClient) { }
 
  url: String = 'http://localhost:3000';
  searchSolicitud(clave: any, by:any) {
    return this.http.get(this.url + '/solicitudes/by'+by+'/' + clave).toPromise();
  }
}
  /*searchSolicitantes(cedula:any):Observable<any>{
    console.log(cedula);
    return this.http.get('/solicitudes/bycedula/' + cedula);
  }
}
  */

