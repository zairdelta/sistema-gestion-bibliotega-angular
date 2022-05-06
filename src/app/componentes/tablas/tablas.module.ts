import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablasRoutingModule } from './tablas-routing.module';
import { InicioComponent } from '../main/inicio/inicio.component'; 
import { AddComponent } from './opciones/add/add.component';
import { AutoresComponent } from './autores/autores.component';
import { EditorialComponent } from './editorial/editorial.component';
import { EstantesComponent } from './estantes/estantes.component';
import { LibrosAutorComponent } from './libros-autor/libros-autor.component';
import { LibrosComponent } from './libros/libros.component';
import { PrestamosComponent } from './prestamos/prestamos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AutoresComponent,
    EditorialComponent,
    EstantesComponent,
    LibrosAutorComponent,
    LibrosComponent,
    PrestamosComponent,
    UsuariosComponent,
    InicioComponent,
    AddComponent,
    EditauComponent,
    AddedComponent,
    EditedComponent,
    AddesComponent,
    EditesComponent,
    AddlibComponent,
    EditlibComponent,
    AddusComponent,
    EditusComponent,
    AddlibauComponent,
    EditlibauComponent,
    AddpresComponent,
    EditpresComponent
  ],
  imports: [
    CommonModule,
    TablasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
  
  })

export class TablasModule { }
