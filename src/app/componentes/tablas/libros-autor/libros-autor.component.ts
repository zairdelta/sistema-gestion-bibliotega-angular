import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeMessage } from 'src/app/funciones/alertas';
import { LibroAutor } from 'src/app/modelos/libroautor';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-libros-autor',
  templateUrl: './libros-autor.component.html',
  styleUrls: ['./libros-autor.component.scss']
})
export class LibrosAutorComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) { }
  libroautor:any=[];

  nuevolibroautor(){
    this.router.navigate(['ini/addlibau'])
  }

  ngOnInit(): void {
    this.service.getLibrosautor().subscribe(
      res=>{
        this.libroautor=res;
        console.log(this.libroautor)
      },
      err=>console.error(err)
    );
  }
  editarlibautor(libroautor:LibroAutor){
    localStorage.setItem("id",libroautor.id.toString());
    this.router.navigate(['ini/editlibau'])

  }
  deleteLibroautor(id:string){
    this.service.deletLibroautor(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();

      
      },
      err=>{console.error(err)

    }
    )
  }
}