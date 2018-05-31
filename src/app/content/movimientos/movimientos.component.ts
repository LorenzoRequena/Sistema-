import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  
  disableB:boolean= false;
  secondView:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  search(){
  this.disableB=true;(res => {
    console.log(res);
    console.log("Its working");
  this.updateSecondView();
  this.disableB=false;
  })
  
  }
  updateSecondView():void{
    this.secondView = !this.updateSecondView;
  }
}
