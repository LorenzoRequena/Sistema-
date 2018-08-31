import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {
  constructor(private http: HttpClient) {}

  url: String = 'http://localhost:3000';
  searchSolicitud(clave: any, by: any) {
    return this.http.get(this.url + '/solicitudes/by' + by + '/' + clave).toPromise();
  }
  updatesolicitud(data, expediente) {
  return this.http.post(this.url + '/solicitudes/actualizar/' + expediente, data).toPromise();
  }
  loadEncargados(){
    return this.http.get(this.url + '/personal/').toPromise();
  }
  updatePersonal(data,cedula){
   return this.http.post(this.url + '/personal/actualizar/'+cedula, data).toPromise();
  }
  searchRespaldo(expediente){
    return this.http.get(this.url + '/respaldo/expediente/'+ expediente).toPromise();
  }
  saveExpediente(data:any){
    return this.http.post(this.url + '/respaldo/' , data).toPromise();
  }
}
