import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { MovimientosService } from '../movimientos.service';
@Component({
  selector: 'app-dialog-movimientos',
  templateUrl: './dialog-movimientos.component.html',
  styleUrls: ['./dialog-movimientos.component.css']
})
export class DialogMovimientosComponent implements OnInit {
    registerForm = new FormGroup({
    encargado: new FormControl(''),
    localizacion: new FormControl('')
  });
  constructor(
    private movilizar: MovimientosService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<DialogMovimientosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
  }

  close(): void {
    this.dialogRef.close();
  }
  mover() {
    console.log(this.registerForm.value, this.data, 'jejeje');
    this.movilizar.updatesolicitud(
      this.registerForm.value,
      this.data[0].expediente
    ).then((resp: any) => {
      this.close();
      this.snackBar.open('Registro actualizado: ' + resp.expediente, 'Salir', {
        duration: 10000
      });
    });
  }
  ngOnInit() {}
}
