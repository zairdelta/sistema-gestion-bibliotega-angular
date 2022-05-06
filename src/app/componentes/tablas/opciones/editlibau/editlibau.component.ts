import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibroAutor } from 'src/app/modelos/libroautor';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-editlibau',
  templateUrl: './editlibau.component.html',
  styleUrls: ['./editlibau.component.scss']
})
export class EditlibauComponent implements OnInit {
  libroautor:any=[]
  libros:any=[]
  autores:any=[]
  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  ngOnInit(): void {
    this.EditarLib()

    this.service.getLibros().subscribe(
      res=>{
        this.libros=res;

      },
      err=>console.error(err)
    );

    this.service.getAutores().subscribe(
      res=>{
        this.autores=res;
      },
      err=>console.error(err)
    );

  
  }
  EditarLib(){
    let id:string|null|number=localStorage.getItem("id");
    console.log(this.libroautor,"LIBROSAUTORES");
    this.service.getLibroautor(id).subscribe(data=>{
      this.libroautor=data;
     
    })
  }
  actualizar(libroautor:LibroAutor){
    this.service.updateLibroautor(libroautor).subscribe(data=>{
      this.libroautor=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }
}
