import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { MovimientosService } from '../movimientos.service';
@Component({
  selector: 'app-dialog-movimientos',
  templateUrl: './dialog-movimientos.component.html',
  styleUrls: ['./dialog-movimientos.component.css']
})
export class DialogMovimientosComponent implements OnInit {
    registerForm = new FormGroup({
    encargado: new FormControl(''),
    localizacion: new FormControl(''),
    observacion: new FormControl('')
    
  });
  observaciones: any[] = [
    {value: 'ob-0', viewValue: 'Observacion por hoja de registro'},
    {value: 'ob-1', viewValue: 'Observacion por dato falso'},
    {value: 'ob-2', viewValue: 'Observacion por nota '},
    {value: 'ob-3', viewValue: 'Ninguna'},
  ];
  localizacion:any;
  encargados:any= [];
  localizaciones: any[] = [
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
    private movilizar: MovimientosService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogMovimientosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.data = data[0];
  }

  close(): void {
    this.dialogRef.close();
  }
  mover() {
    console.log('ejecutando mover') 
    console.log(this.registerForm.value, this.data, 'jejeje');
    this.movilizar.updatesolicitud(this.registerForm.value,this.data.expediente).then((resp: any) => {
      this.close();
      this.snackBar.open('Registro actualizado: ' + resp.expediente, 'Salir', {
        duration: 10000
      });
    });
  }
  loadEncargados(){
    this.movilizar.loadEncargados().then(a=>{
      this.encargados = a; 
    })  }
  ngOnInit() {
    this.loadEncargados();
  }
}
