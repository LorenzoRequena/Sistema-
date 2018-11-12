import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  username: String;
  password: String;
  rol:      String;
  message: String = 'Bienvenido al sistema de seguimiento y control de expediente de la zona educativa';
 
  constructor( private login:LoginService, public router: Router, private mat:MatSnackBar) { }

  ngOnInit() {
  }
   
  loginUser(){
    this.login.loginUser({logusername:this.username,logpassword:this.password}).then(resp =>{
      console.log(resp);
      this.login.isLogged.next(true);
      this.login.userData.next(resp)
      this.router.navigate(['inicio'])
  
   }).catch(err =>{
    this.login.isLogged.next(false);
    this.login.userData.next({}) 
    console.log(err,"Usuario no registrado!!!");
   if(err.status === 401){
    this.mat.open('Usuario no registrado','OK',{
     duration:3000
    });
    
   }
   
   });
   
   }
  saveUser(){
   this.login.saveUser({username:this.username,password:this.password,rol:this.rol}).subscribe(resp =>{
      console.log(resp);
   })
          
  }
}
