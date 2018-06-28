import { Component, OnInit } from '@angular/core';
import { ConsultarService } from "./consultar.service";

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  

  constructor(private consultar:ConsultarService) { }
  cedula :any;
  secondView:false;
  ngOnInit() {

  }
/*
search(){
 this.consultar.searchSolicitantes(this.cedula).subscribe(resp =>{
   console.log(resp);
   
  })
*/
search(){
  this.consultar.searchSolicitante(this.cedula).then(resp =>{
    console.log(resp);
    
   })


  }

  
  
}
