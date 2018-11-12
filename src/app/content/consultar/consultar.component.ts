import { Component, OnInit } from '@angular/core';
import { ConsultarService } from "./consultar.service";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {


  constructor(private consultar: ConsultarService, private dialog: MatDialog, private mat: MatSnackBar) { }
  solicitante: any;
  cedula: any;
  localizacion: any;
  solicitudes: any;
  proposito: any;
  by: String = 'cedula';
  ngOnInit() {

  }
  parsearFecha(fecha) {
    return new Date(fecha).toLocaleDateString("en-US");


  }
  openModel(data) {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: data
    });
  }

  search() {
    this.consultar.searchSolicitud(this.cedula, this.by).then(resp => {
      console.log(resp, typeof resp);
      this.solicitudes = null;
      if (resp[0] && resp[0].cedula) {
        this.solicitudes = resp;
        // this.openModel(resp);  
      }
      else {
        this.mat.open('No encontrado!!', 'Salir', {
          duration: 3000,

        })
      }

    })

  }
  change(by: String) {

    return this.by = by;

  }
}
