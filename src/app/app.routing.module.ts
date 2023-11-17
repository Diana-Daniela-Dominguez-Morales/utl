import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AspirantesComponent } from "../app/aspirantes/aspirantes.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { EgresadosComponent } from "./egresados/egresados.component";
import { AdministrativoComponent } from "./administrativo/administrativo.component";
import { EstudianteComponent } from "./estudiante/estudiante.component";
import { DocenteComponent} from "./docente/docente.component";
import { EmpresarioComponent } from "./empresario/empresario.component";


const routes:Routes=[
    {path: '',redirectTo: '/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'AspirantesComponent', component: AspirantesComponent },
    {path: 'EgresadosComponent', component: EgresadosComponent },
    {path: 'AdministrativoComponent', component: AdministrativoComponent },
    {path: 'EstudianteComponent', component: EstudianteComponent },
    {path: 'DocenteComponent', component: DocenteComponent },
    {path: 'EmpresarioComponent', component: EmpresarioComponent },
    
    
    

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule{}
