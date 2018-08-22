import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    telefono: new FormControl(''),
    correo: new FormControl(''),
  })
  proposito:String;
  nombre:any;
  disableB: boolean = false;
  action: String;
  view: String = 'search';
  cedula: String;
  by: String = 'cedula';
  solicitudes: any;
  solicitante:any;




  constructor(private register: RegistrarService, private snackBar: MatSnackBar, private consultar: ConsultarService) { }

  ngOnInit() {
  }
  parsearFecha(fecha){
    return new Date(fecha).toLocaleDateString("en-US");
  
    }
  changeView(value: String) {

    return this.view = value;
  }
  search() {
    this.consultar.searchSolicitante(this.cedula).then((resp: any) => {
      console.log(resp);
      this.solicitante = resp[0];
      if (resp[0] && resp[0].cedula) {
        this.consultar.searchSolicitud(resp[0].cedula, "cedula").then(result => {
          this.solicitudes = result
          console.log(result);
          this.changeView("solicitar");
        })
      } else {
       
        this.changeView("register")
      }
    });
    }
    saveSolicitud(){
      this.register.saveSolicitud({proposito: this.proposito, cedula: this.cedula}).then((resp:any)=>{
        console.log(resp);
        this.search();
        this.snackBar.open("Se ha registrado por el numero de expediente: " + resp,"Ocultar",{
          duration:10000,
        });
      })    
    }

  save() {
    this.disableB = true;
    this.register.saveSolicitante(this.registerForm.value).then((resp:any) => {
      console.log(resp);
      this.snackBar.open("Se ha registrado exitosamente con la C.I : " + resp.cedula, 'Ocultar', {
        duration: 10000,
      });
      this.cedula = resp.cedula;
      this.search();
      this.registerForm.reset();
      this.disableB = false;
    });
  }

}

