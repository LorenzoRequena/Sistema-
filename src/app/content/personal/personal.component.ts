import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  registerForm = new FormGroup({
  nombres: new FormControl(''),
  apellidos: new FormControl(''),
  cedula: new FormControl(''),  
  });

  constructor() { }

  ngOnInit() {
  }

}
