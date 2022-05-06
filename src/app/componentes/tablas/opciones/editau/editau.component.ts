import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Autores } from 'src/app/modelos/autores';
import { AuthService } from 'src/app/servicio/auth.service';
import { AutoresComponent } from '../../autores/autores.component';

@Component({
  selector: 'app-editau',
  templateUrl: './editau.component.html',
  styleUrls: ['./editau.component.scss']
})
export class EditauComponent implements OnInit {

  autores:any=[];
  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }

  ngOnInit(): void {
    this.Editar()
  }
  Editar(){
    let id:string|null|number=localStorage.getItem("id");
    this.service.getAutor(id).subscribe(data=>{
      this.autores=data;
    })
  }
  actualizar(autores:Autores){
    this.service.updateAutores(autores).subscribe(data=>{
      this.autores=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }
}
