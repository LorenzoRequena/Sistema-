import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  
 /*  nombre:any;
   encargado:any;
   apellido:any;
   observacion:any;
*/
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data)
    }

  close(): void {
    this.dialogRef.close();
  }

  
  ngOnInit() {
  }

}
