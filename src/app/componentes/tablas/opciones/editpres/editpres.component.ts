import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestamo } from 'src/app/modelos/prestamo';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.scss']
})
export class EditpresComponent implements OnInit {

  prestamo:any=[]
  libros:any=[]
  usuarios:any=[]
  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  ngOnInit(): void {
    this.EditarLib()

    this.service.getLibros().subscribe(
      res=>{
        this.libros=res
        console.log(this.libros)
      },
      err=>console.error(err)
    );

    this.service.getUsuarios().subscribe(
      res=>{
        this.usuarios=res;
      },
      err=>console.error(err)
    );

  
  }
  EditarLib(){
    let id:string|null|number=localStorage.getItem("id");
    console.log(this.prestamo,"LIBROSAUTORES");
    this.service.getPrestamo(id).subscribe(data=>{
      this.prestamo=data;
      console.log(this.prestamo,"PRESTAMO")
     
    })
  }
  actualizar(prestamo:Prestamo){
    this.service.updatePrestamo(prestamo).subscribe(data=>{
      this.prestamo=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }
}
