import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  displayedColumns: string[] = ['position', 'cedula', 'nombre', 'apellido', 'localizacion'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  nombre: String;
  position: number;
  apellido: String;
  cedula: String;
  localizacion: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, cedula: '23951373', nombre: 'Lorenzo', apellido: 'Requena', localizacion: 'Tipeo'},
  {position: 2, cedula: '23951373', nombre: 'Lorenzo', apellido: 'Requena', localizacion: 'Tipeo'},
  {position: 3, cedula: '23951373', nombre: 'Lorenzo', apellido: 'Requena', localizacion: 'Tipeo'},
  {position: 4, cedula: '23951373', nombre: 'Lorenzo', apellido: 'Requena', localizacion: 'Tipeo'},
];