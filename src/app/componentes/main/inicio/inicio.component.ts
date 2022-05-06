/*---------------------------------ZAIRDELTA----------------------------------------*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
   estado=0;
  constructor(private router:Router){}
  
  listarAutores(){
    this.estado=1;
  }
  listaLibros(){
    this.estado=2;
  }
  listaEditorial(){
    this.estado=3;
  }
  listaEstantes(){
    this.estado=4;
  }
  listalibAut(){
    this.estado=5;
  }
  listaPrestamos(){
    this.estado=6;
  }
  listaUsuarios(){
    this.estado=7;
  }
  cerrarsesion(){
    localStorage.removeItem("token_access")
    
    this.router.navigate(["/login"])
    window.location.hash="no-back-button";
    window.location.hash="Again-No-back-button" //chrome
    window.onhashchange=function(){window.location.hash="no-back-button";}
  }


  

  ngOnInit(): void {
  }

}
