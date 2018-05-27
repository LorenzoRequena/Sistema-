import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import { MatSidenavModule, MatToolbarModule,
   MatListModule, MatFormFieldModule
   , MatInputModule, MatSelectModule, MatGridListModule,MatIconModule } from '@angular/material'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    MatIconModule

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
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
