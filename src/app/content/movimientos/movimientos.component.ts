import { Component, OnInit } from '@angular/core';
import { MovimientosService } from './movimientos.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { DialogMovimientosComponent } from './dialog-movimientos/dialog-movimientos.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  constructor(private mover: MovimientosService, private dialog: MatDialog) {}
  by: String = 'expediente';
  expediente: any;
  ngOnInit() {}
  parsearFecha(fecha) {
    return new Date(fecha).toLocaleDateString('en-US');
  }
  openModel(data) {
    const dialogRef = this.dialog.open(DialogMovimientosComponent, {
      width: '500px',
      data: data
    });
  }

  search() {
    this.mover.searchSolicitud(this.expediente, this.by).then(resp => {
      console.log(resp, typeof resp);
      this.openModel(resp);
    });
  }
}
