import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { InicioComponent } from './componentes/main/inicio/inicio.component';
import { VigilanteGuard } from './vigilante.guard';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'ini',
  loadChildren:()=>import('./componentes/tablas/tablas.module').then(m=>m.TablasModule)


  },
  {path:'**',redirectTo:'/login'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
