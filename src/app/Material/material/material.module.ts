import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule, MatSidenavContainer, MatSidenavContent, MatToolbarModule } from '@angular/material'

@NgModule({
  imports: [
    CommonModule,    
    MatSidenavModule,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbarModule,
  ],
  exports: [
    MatSidenavModule,
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbarModule,
  ],
  declarations: []
})
export class MaterialModule { }
