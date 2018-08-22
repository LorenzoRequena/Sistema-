import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as jsPDF from 'jspdf'
import { ReporteService } from './reporte.service';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  displayedColumns = ['position', 'nombre', 'expediente', 'proposito', 'encargado'];
  dataSource: any;
  dataClone: any;
  solicitudes: any;
  view: String = 'buscar';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reporte: ReporteService) {
    reporte.getAllSolicitudes().then((solicitudes: any) => {
      solicitudes.sort((a, b) => {
        return +new Date(a.created) - +new Date(b.created);
      })
      this.solicitudes = solicitudes;

    })
  }
  ngOnInit() {
  }
  changeView(value: String) {
   /* return this.view = value;
    this.dataClone = this.solicitudes;
    this.dataSource = new MatTableDataSource(this.solicitudes);
    this.dataSource.paginator = this.paginator;
  */
  }
  generarReport() {

    this.changeView('reporte');

  }

  downland() {
    let doc = new jsPDF()
    doc.text('Hello world!', 10, 0)
    this.solicitudes.map((item, index) => {
      doc.text('nombre: ' + item.nombre + ' expediente: ' + item.expediente, 20, 10 * index)
    })
    doc.save('reporte.pdf')
  }
}
