import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private login: LoginService, public router: Router) { }
  canActivate(): boolean{
    if(!this.login.isUserLogged()){
      this.router.navigate(['login'])
      return false
    }
    return true
  }
}
