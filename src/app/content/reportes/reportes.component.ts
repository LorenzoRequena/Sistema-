import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as jsPDF from 'jspdf'
import { ReporteService } from './reporte.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  displayedColumns = ['position', 'nombre', 'expediente', 'proposito', 'encargado'];
  dataSource: any;
  dataClone: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reporte: ReporteService) {
    reporte.getAllSolicitudes().then((solicitudes: any) => {
      //solicitudes.filter()
      solicitudes.sort((a, b) => {
        return +new Date(a.created) - +new Date(b.created);
      })
      this.dataClone = solicitudes;
      this.dataSource = new MatTableDataSource(solicitudes);
      this.dataSource.paginator = this.paginator;
    })
  }
  ngOnInit() {
  }
  downland() {
    let doc = new jsPDF()
    doc.text('Hello world!', 10, 0)
    this.dataClone.map((item, index) => {
      doc.text('nombre: ' + item.nombre + ' expediente: ' + item.expediente, 20, 10 * index)
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
