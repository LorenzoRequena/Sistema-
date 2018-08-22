import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import { RegistrarService } from '../../registrar/registrar.service';
import { MovimientosService } from '../../movimientos/movimientos.service';
@Component({
  selector: 'app-dialog-personal',
  templateUrl: './dialog-personal.component.html',
  styleUrls: ['./dialog-personal.component.css']
})
export class DialogPersonalComponent implements OnInit {
cedula:any;
ubicacion:any;
ubicacionPersonal:any;
ubicaciones: any[] = [
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
  
  constructor(
    public dialogRef:MatDialogRef<DialogPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  private movilizar:MovimientosService,
private snackBar:MatSnackBar){
      console.log(data)
     
    }
   
    close(): void{
      this.dialogRef.close();
    }
    mover() {
      this.movilizar.updatePersonal(this.ubicacionPersonal,this.data.cedula).then((resp: any) => {
        this.close();
        this.snackBar.open('Personal Actualizado: ' + resp.cedula, 'Salir', {
          duration: 10000
        });
      });
    }

  ngOnInit() {
  }

}
