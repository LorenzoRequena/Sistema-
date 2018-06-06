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
  search(){}


}
