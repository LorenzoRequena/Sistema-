import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  username: String;
  password: String;
  rol:      String;
  constructor( private login:LoginService ) { }

  ngOnInit() {
  }

  saveUser(){
   this.login.saveUser({username:this.username,password:this.password,rol:this.rol}).subscribe(resp =>{
      console.log(resp);
   })
       
  }
}
