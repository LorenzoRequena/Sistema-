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
  disableB: boolean = false;
  message: String;
  action: String;
  view: String = 'search';
  cedula: String;
  by: String = 'cedula';
  solicitudes: any;



  constructor(private register: RegistrarService, private snackBar: MatSnackBar, private consultar: ConsultarService) { }

  ngOnInit() {
  }
  changeView(value: String) {

    return this.view = value;
  }
  search() {
    this.consultar.searchSolicitante(this.cedula).then((resp: any) => {
      if (resp.cedula) {
        this.consultar.searchSolicitud(resp.cedula, "cedula").then(result => this.solicitudes = result)
      } else {
        this.changeView("register")
      }
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

