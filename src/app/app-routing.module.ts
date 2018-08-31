import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './content/registrar/registrar.component';
import { ConsultarComponent } from './content/consultar/consultar.component';
import { MovimientosComponent } from './content/movimientos/movimientos.component';
import { ReportesComponent } from './content/reportes/reportes.component';
import { AdminComponent } from './content/admin/admin.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './content/home/home.component';
import { UbicacionComponent } from './content/ubicacion/ubicacion.component';
import { GuardService } from './inicio/guard.service';
import { PersonalComponent } from './content/personal/personal.component';
import { SeguimientoComponent } from './content/seguimiento/seguimiento.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: InicioComponent },
  { path: 'inicio', component: HomeComponent, canActivate: [GuardService] },
  { path: 'registrar', component: RegistrarComponent, canActivate: [GuardService] },
  { path: 'consultar', component: ConsultarComponent, canActivate: [GuardService] },
  { path: 'movimientos', component: MovimientosComponent, canActivate: [GuardService] },
  { path: 'reportes', component: ReportesComponent, canActivate: [GuardService] },
  { path: 'admin', component: AdminComponent, canActivate: [GuardService] },
  { path: 'personal', component: PersonalComponent, canActivate: [GuardService] },
  { path: 'seguimiento', component: SeguimientoComponent, canActivate: [GuardService] }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }