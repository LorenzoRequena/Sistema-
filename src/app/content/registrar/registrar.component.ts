import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { RegistrarService } from './registrar.service';

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
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    correo: new FormControl(''),
  })
  solicitudForm = new FormGroup({
    type: new FormControl(''),
    expediente: new FormControl(''),
  })
  disableB: boolean = false;
  segundaVista :boolean=false;


  constructor(private register: RegistrarService) { }

  ngOnInit() {
  }

  save() {
    this.disableB = true;
    this.register.saveSolicitante(this.registerForm.value).subscribe(res => {
      console.log(res);
      this.updateSegundaVista();
      this.registerForm.reset()
      this.disableB = false;
    })
   // console.log(this.registerForm.value);
    
  }
  updateSegundaVista() {
    this.segundaVista = !this.updateSegundaVista;
  }

}
