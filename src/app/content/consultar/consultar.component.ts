import { Component, OnInit } from '@angular/core';
import { ConsultarService } from "./consultar.service";
import { RegistrarService } from '../registrar/registrar.service';
import { Observable, Subject } from 'rxjs';
@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  

  constructor(private consultar:ConsultarService) { }
  cedula :any;
  ngOnInit() {

  }

  search(){
   this.consultar.searchSolicitantes(this.cedula).subscribe(resp =>{
     console.log(resp);
     
   })


  }
}
