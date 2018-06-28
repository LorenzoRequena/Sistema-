import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  displayedColumns = ['position', 'nombre', 'expediente', 'proposito','encargado'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  downland(){
    let doc = new jsPDF()
    doc.text('Hello world!', 10, 0)
    ELEMENT_DATA.map((item,index) =>{
      doc.text('nombre: ' + item.nombre + ' expediente: ' + item.expediente, 20, 10*index )
    })
    doc.save('reporte.pdf')
  }
}
export interface PeriodicElement {
  nombre: String;
  position: Number;
  expediente: Number;
  encargado: String;
  proposito: String;  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 2, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 3, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 4, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 5, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 6, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 7, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 8, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 9, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 10, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 11, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 12, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 13, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 14, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 15, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 16, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 17, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 18, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 19, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
  {position: 20, nombre: 'Pedro Alvarez', expediente: 1111118, proposito:'Legalizacion de Notas', encargado: 'Nidia Melo'},
];