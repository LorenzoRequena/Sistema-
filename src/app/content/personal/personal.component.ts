import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { RegistrarService } from '../registrar/registrar.service';
import { ConsultarService } from '../consultar/consultar.service';
import { MatSnackBar, MatDialog } from '../../../../node_modules/@angular/material';
import { DialogPersonalComponent } from './dialog-personal/dialog-personal.component';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  registerForm = new FormGroup({
  nombre: new FormControl(''),
  apellido: new FormControl(''),
  cedula: new FormControl(''),  
  });
  cedulaBuscar:String;
  personales:any;
  view:String = 'register';

  constructor(private personal:RegistrarService, private consultar:ConsultarService,
     private mat:MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
  }

  openModel(data){
    const dialogRef = this.dialog.open(DialogPersonalComponent, {
      width: '500px',
      data:data
    });
  }

  save(){
    this.personal.savePersonal(this.registerForm.value).then(resp =>{
      console.log(resp);
      this.registerForm.reset();
      this.mat.open("Se ha registrado con exito!" , 'Salir', {
        duration: 10000,
      })

    })
  
  }
  search(){
    this.consultar.searchPersonal(this.cedulaBuscar).then(resp =>{
      console.log(resp);
      this.cedulaBuscar = "";
    })
  }
  change(view:String){
  return this.view = view;
  }
}
