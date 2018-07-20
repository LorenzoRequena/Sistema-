import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-dialog-personal',
  templateUrl: './dialog-personal.component.html',
  styleUrls: ['./dialog-personal.component.css']
})
export class DialogPersonalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogPersonalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",data)
    }

  close(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}