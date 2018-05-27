import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './content/registrar/registrar.component';
import { ConsultarComponent } from './content/consultar/consultar.component';
import { MovimientosComponent } from './content/movimientos/movimientos.component';
import { ReportesComponent } from './content/reportes/reportes.component';
import { AdminComponent } from './content/admin/admin.component';
import { AutoridadComponent } from './content/autoridad/autoridad.component';

const routes: Routes = [
  { path: '', redirectTo: '/registrar', pathMatch: 'full' },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'consultar', component: ConsultarComponent },
  { path: 'movimientos', component: MovimientosComponent },
  { path: 'reporte', component: ReportesComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'autoridad', component: AutoridadComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}