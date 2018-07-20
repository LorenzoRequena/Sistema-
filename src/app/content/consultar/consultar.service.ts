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
  
 searchSolicitante(clave:any ){
   return this.http.get(this.url + '/solicitantes/cedula/'+ clave).toPromise();
 }
 searchPersonal(clave:any){
   console.log(clave)
   return this.http.get(this.url +'/personal/bycedula/'+ clave).toPromise();
 } 
}
