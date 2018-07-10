import { Component } from '@angular/core';
import { LoginService } from './inicio/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events: string[] = [];
  opened: boolean = false;
  islogin:any;
constructor(private login:LoginService){
login.isLogged.subscribe(a =>{
  this.islogin = a;
  this.opened = a;
});

}
}
