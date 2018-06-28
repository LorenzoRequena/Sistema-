import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatSidenavModule, MatToolbarModule,
   MatListModule, MatFormFieldModule
   , MatInputModule, MatSelectModule, MatGridListModule,MatIconModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';





@NgModule({
  imports: [
    CommonModule,    
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule
    

  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatListModule,    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatDialogModule
    
  ],
  declarations: []
})
export class MaterialModule { }
