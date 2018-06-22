import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { MaterialModule } from './Material/material/material.module';
import { RegistrarComponent } from './content/registrar/registrar.component';
import { ConsultarComponent } from './content/consultar/consultar.component';
import { MovimientosComponent } from './content/movimientos/movimientos.component';
import { ReportesComponent } from './content/reportes/reportes.component';
import { AutoridadComponent } from './content/autoridad/autoridad.component';
import { AdminComponent } from './content/admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrarComponent,
    ConsultarComponent,
    MovimientosComponent,
    ReportesComponent,
    AutoridadComponent,
    AdminComponent,
    InicioComponent

   
  
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 

}
