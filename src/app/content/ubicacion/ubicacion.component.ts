import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '../../../../node_modules/@angular/material';
import { DialogUbicacionComponent } from './dialog-ubicacion/dialog-ubicacion.component';
import { ConsultarService } from '../consultar/consultar.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  encargado:any;
  cedulaPersonal:any;
  cedula:any;
  encargados:any[];
  localizacion:any;
  localizaciones:any[];
  constructor(
    private dialog:MatDialog,
    private consultar: ConsultarService,
    private mat:MatSnackBar
  ){}
  openModel(data){
    const dialogRef =  this.dialog.open(DialogUbicacionComponent,{
      width: '500px',
      data: data
    })
  }
  search(){
    this.consultar.searchPersonal(this.cedulaPersonal).then(resp =>{
      console.log(resp);
      if(resp[0] && resp[0].cedula){

        this.openModel(resp[0])
      }else{
        this.mat.open("Personal no encontrado" , 'Salir', {
          duration: 3000,
        })
        
      }
        
    })
  }
  
  ngOnInit() {
  
  }
}

