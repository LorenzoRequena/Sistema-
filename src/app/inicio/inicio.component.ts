import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  username: String;
  password: String;
  rol:      String;
  message: String = 'Bienvenido al sistema de control de estudio';
  messageError: String ="Error usuario no identificado";
  constructor( private login:LoginService, public router: Router) { }

  ngOnInit() {
  }
   
  loginUser(){
    this.login.loginUser({logusername:this.username,logpassword:this.password}).subscribe(resp =>{
      console.log(resp);
      if(!resp){
        this.login.isLogged.next(false);
        this.login.userData.next({}) 
        return;
      }else
      this.login.isLogged.next(true);
      this.login.userData.next(resp)
      this.router.navigate(['inicio'])
   })
   
   }
  saveUser(){
   this.login.saveUser({username:this.username,password:this.password,rol:this.rol}).subscribe(resp =>{
      console.log(resp);
   })
          
  }
}
