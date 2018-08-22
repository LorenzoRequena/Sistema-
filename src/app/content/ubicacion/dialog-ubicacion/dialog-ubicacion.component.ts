import { Component, OnInit, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA, MatDialogRef } from '../../../../../node_modules/@angular/material';

@Component({
  selector: 'app-dialog-ubicacion',
  templateUrl: './dialog-ubicacion.component.html',
  styleUrls: ['./dialog-ubicacion.component.css']
})
export class DialogUbicacionComponent implements OnInit {

  constructor(
    private dialogRef:MatDialogRef<DialogUbicacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) { }

  close (): void{
 this.dialogRef.close();
  }
  ngOnInit() {
  }

}
