import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import * as jsPDF from 'jspdf'
import { ReporteService } from './reporte.service';
import { FormControl } from '@angular/forms';
import { } from "module";
import * as moment from 'moment';



@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})

export class ReportesComponent implements OnInit {
  fechaA:any;
  fechaB:any;
 
  displayedColumns = [ 'expediente', 'proposito', 'encargado'];
  displayedColumns2 = ['departamento','expediente', 'proposito','encargado']
  
  dataClone: any;
  solicitudes: any;
  departamentoSelected = '';
  departamentos: any[] = [
    {value: 'act-0', viewValue: 'Actas de Evaluación'},
    {value: 'anul-1', viewValue: 'Anulacion de titulos'},
    {value: 'carac-2', viewValue: 'Caracas'},
    {value: 'verf-3', viewValue: 'Verificación y Conformación'},
    {value: 'const-4', viewValue: 'Constancia de Sexto Grado'},
    {value: 'cont-5', viewValue: 'Control de Estudios'},
    {value: 'emi-6', viewValue: 'Emisión de Titulos'},
    {value: 'equi-7', viewValue: 'Equivalencia'},
    {value: 'mater-8', viewValue: 'Materia Pendiente'},
    {value: 'miss-9', viewValue: 'Mision'},
    {value: 'not-10', viewValue: 'Notificación'},
    {value: 'obs-11', viewValue: 'Observación'},
    {value: 'obser-12', viewValue: 'Observación hoja de registro'},
    {value: 'ob-13', viewValue: 'Observación tipeo de nueva planilla'},
    {value: 'trans-14', viewValue: 'Transcripción'},
    {value: 'proc-15', viewValue: 'Proceso  de Evaluación'},
    {value: 'tall-16', viewValue: 'Taquilla de entrada'},
    {value: 'talls-17', viewValue: 'Taquilla de salida'},
    {value: 'tiil-18', viewValue: 'Titulo en proceso'},
    {value: 'otrs-19', viewValue: 'Otros'}
  ];
  view: String = 'fecha';
  dataSource: MatTableDataSource<any> = new MatTableDataSource([]);
  private paginator: MatPaginator;
  @ViewChild(MatPaginator)
  set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.dataSource.paginator = this.paginator;
  }
  constructor(private reporte: ReporteService) {
      reporte.getAllSolicitudes().then((solicitudes: any) => {
      console.log(solicitudes,"Estas son las solicitudes")
      solicitudes.sort((a, b) => {
        return +new Date(a.created) - +new Date(b.created);
      })
      this.solicitudes = solicitudes;

    })
  }
  ngOnInit() {
  
    console.log(this.dataSource, this.solicitudes);
  }
  changeView(value: String) {
   /* return this.view = value;
    this.dataClone = this.solicitudes;
    this.dataSource = new MatTableDataSource(this.solicitudes);
    this.dataSource.paginator = this.paginator;
  */
  }
  parsearFecha(fecha){
    return new Date(fecha).toLocaleDateString("en-US");
  
    }
  generarReport() {
    const fechaA = this.fechaA.subtract(1, 'd') ;
    const fechaB = this.fechaB.add(1,'d');
    
    console.log(fechaA,'esta es la fecha a' , fechaB);
    let resultado = this.solicitudes.filter((resp: any)=>{
      console.log(moment(resp.created).isBetween(fechaA, fechaB), resp.created, 'Moment evalue')

       return moment(resp.created).isBetween(fechaA, fechaB);
    })
  
    this.change('reporte');
    this.dataSource = resultado;
    this.dataSource.paginator = this.paginator
     
  }

  generarReportDep() {
    console.log(this.departamentoSelected, 'current select value')
    let resultado = this.solicitudes.filter((resp: any)=>{
      console.log('into filter')
       return resp.localizacion === this.departamentoSelected;
    })
  
    this.change('reporteDepar');
    this.dataSource = resultado;
    this.dataSource.paginator = this.paginator
  }
  change(view:String){
    return this.view = view;
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
