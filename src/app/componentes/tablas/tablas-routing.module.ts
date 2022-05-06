import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from 'src/app/vigilante.guard';
import { InicioComponent } from '../main/inicio/inicio.component';
import { AddComponent } from './opciones/add/add.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { EstantesComponent } from './estantes/estantes.component';
import { LibrosAutorComponent } from './libros-autor/libros-autor.component';
import { LibrosComponent } from './libros/libros.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { EditauComponent } from './opciones/editau/editau.component';
import { AddedComponent } from './opciones/added/added.component';
import { EditedComponent } from './opciones/edited/edited.component';
import { AddesComponent } from './opciones/addes/addes.component';
import { EditesComponent } from './opciones/edites/edites.component';
import { AddlibComponent } from './opciones/addlib/addlib.component';
import { EditlibComponent } from './opciones/editlib/editlib.component';
import { AddusComponent } from './opciones/addus/addus.component';
import { EditusComponent } from './opciones/editus/editus.component';
import { AddlibauComponent } from './opciones/addlibau/addlibau.component';
import { EditlibauComponent } from './opciones/editlibau/editlibau.component';
import { AddpresComponent } from './opciones/addpres/addpres.component';
import { EditpresComponent } from './opciones/editpres/editpres.component';
const routes: Routes = [

  {
    path:'',
    children:[
      {path:'addlibau',component:AddlibauComponent},
      {path:'editlibau',component:EditlibauComponent},
      {path:'addpres',component:AddpresComponent},
      {path:'editpres',component:EditpresComponent},
      {path:'add',component:AddComponent},
      {path:'editau',component:EditauComponent},
      {path:'added',component:AddedComponent},
      {path:'edited',component:EditedComponent},
      {path:'addes',component:AddesComponent},
      {path:'edites',component:EditesComponent},
      {path:'addlib',component:AddlibComponent},
      {path:'editlib',component:EditlibComponent},
      {path:'addus',component:AddusComponent},
      {path:'editus',component:EditusComponent},
      {path:'autores',component:AutoresComponent},
      {path:'editorial',component:EditorialComponent},
      {path:'estantes',component:EstantesComponent},
      {path:'libros',component:LibrosComponent},
      {path:'libros_autor',component:LibrosAutorComponent},
      {path:'prestamos',component:PrestamosComponent},
      {path:'usuarios',component:UsuariosComponent},
      {path:'inicio',component:InicioComponent},
      {path:'**',redirectTo:'/inicio'},

    ],canActivateChild:[VigilanteGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablasRoutingModule { }
