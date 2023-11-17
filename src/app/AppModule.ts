import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AspirantesComponent } from './aspirantes/aspirantes.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { EgresadosComponent } from './egresados/egresados.component';
import { AdministrativoComponent } from './administrativo/administrativo.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { DocenteComponent } from './docente/docente.component';
import { EmpresarioComponent } from './empresario/empresario.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    AspirantesComponent,
    EgresadosComponent,
    AdministrativoComponent,
    EstudianteComponent,
    DocenteComponent,
    EmpresarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
