import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../movimientos/movimientos.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})
export class SeguimientoComponent implements OnInit {
  expediente: any;
  usuario:any;
  nombre:any;
  view: String ='search';
  movimientos: any = [];
  displayedColumns: any[] = ['expediente', 'encargado','departamento','fecha']
  constructor(private consultar:MovimientosService ,private mat:MatSnackBar) { }

  ngOnInit() {
  }
  parsearFecha(fecha){
    return new Date(fecha).toLocaleDateString("en-US");
    }
changeView(value:String ){
  return this.view = value;
}
search(){
  this.consultar.searchRespaldo(this.expediente).then(resp =>{
    this.expediente = null;
    if(resp[0] && resp[0].expediente){
      this.movimientos = resp;
      this.changeView('reporte')
    }else{
      this.mat.open("Expediente no encontrado" , 'Salir', {
        duration: 3000,
      })
      console.log("Expediente no encontrado!!!")
    }
    
   })
  }

}


