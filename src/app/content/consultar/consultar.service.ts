import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  constructor(private http: HttpClient) { }
 
  url: String = 'http://localhost:3000';
  searchSolicitante(cedula: any) {
    return this.http.get(this.url + '/solicitudes/bycedula/' + cedula).toPromise();
  }
}
  /*searchSolicitantes(cedula:any):Observable<any>{
    console.log(cedula);
    return this.http.get('/solicitudes/bycedula/' + cedula);
  }
}
  */

