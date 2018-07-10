import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RegistrarService } from './registrar.service';
import { MatSnackBar } from '@angular/material';
import { ConsultarService } from '../consultar/consultar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
     
    registerForm = new FormGroup({
    nombre: new FormControl(''),
    apellido: new FormControl(''),
    cedula: new FormControl(''),
    proposito: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
  })
    disableB: boolean = false;
    message: String ;
    action: String;
    view:String = 'search';
    cedula: String;
    by:String = 'cedula';
    solicitudes:any;
   

  constructor(private register: RegistrarService, private snackBar:MatSnackBar, private consultar: ConsultarService) { }

  ngOnInit() {
  }
  changeView(value:String){

    return this.view = value;
  }
  search(){
    this.consultar.searchSolicitud(this.cedula,this.by).then( resp =>{
      console.log(resp,typeof resp);
      this.solicitudes =  null;
      if (typeof resp === 'object') {
       this.solicitudes = resp;
       return ;
      }
      this.changeView(resp);
    });

    
     
    
  }

  save() {
      this.disableB = true;
      this.register.saveSolicitante(this.registerForm.value).then(resp => {
      console.log(resp);
      
      this.snackBar.open("Nro de expediente generado: " + resp, 'Salir', {
        duration: 10000,
      
      });
      
      this.registerForm.reset();
      this.disableB = false;
    });
   // console.log(this.registerForm.value);
  }


}
