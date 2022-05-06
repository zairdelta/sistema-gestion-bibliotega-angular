import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/modelos/editorial';
import { Libro } from 'src/app/modelos/libro';
import { AuthService } from 'src/app/servicio/auth.service';
import { AutoresComponent } from '../../autores/autores.component';

@Component({
  selector: 'app-editlib',
  templateUrl: './editlib.component.html',
  styleUrls: ['./editlib.component.scss']
})
export class EditlibComponent implements OnInit {
  libro:any=[];
 
  estante:any=[]
  editorial:any=[]
  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  ngOnInit(): void {
    this.service.getEstantes().subscribe(
      res=>{
        this.estante=res;
        console.log(this.estante,"SI ENTRO");
      },
      err=>console.error(err)
    );

    this.service.getEditoriales().subscribe(
      res=>{
        this.editorial=res;
        console.log(this.editorial,"SI ENTRO");
      },
      err=>console.error(err)
    );

    this.EditarLib()
  }
  EditarLib(){
    let id:string|null|number=localStorage.getItem("id");
    this.service.getLibro(id).subscribe(data=>{
      this.libro=data;
    })
  }
  actualizar(libro:Libro){
    this.service.updateLibro(libro).subscribe(data=>{
      this.libro=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }
 

}
