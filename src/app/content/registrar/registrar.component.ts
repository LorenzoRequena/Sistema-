import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RegistrarService } from './registrar.service';
import { MatSnackBar } from '@angular/material';

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
    type: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
  })
    disableB: boolean = false;


  constructor(private register: RegistrarService,snackbar:MatSnackBar) { }

  ngOnInit() {
  }

  save() {
      this.disableB = true;
      this.register.saveSolicitante(this.registerForm.value).then(resp => {
      console.log(resp);
      this.registerForm.reset();
      this.disableB = false;
    });
   // console.log(this.registerForm.value);
  }


}
