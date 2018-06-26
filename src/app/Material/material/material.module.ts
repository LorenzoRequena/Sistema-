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
import {MatSnackBar} from '@angular/material';





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
    MatSnackBar
    

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
    MatSnackBar
    
  ],
  declarations: []
})
export class MaterialModule { }
