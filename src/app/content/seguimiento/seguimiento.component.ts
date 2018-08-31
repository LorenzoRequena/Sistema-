import { Component, OnInit } from '@angular/core';
import { MovimientosService } from '../movimientos/movimientos.service';

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
  displayedColumns: any[] = ['expediente', 'encargado', 'usuario','departamento','fecha']
  constructor(private consultar:MovimientosService) { }

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
    console.log(resp,typeof resp);
    this.expediente = null;
    if (resp) {
     this.movimientos = resp;
     this.changeView('reporte')
    
    }
    
   })
  }

}


