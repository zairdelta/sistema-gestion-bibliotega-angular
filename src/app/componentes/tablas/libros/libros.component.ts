import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, timeMessage } from 'src/app/funciones/alertas';
import { Libro } from 'src/app/modelos/libro';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  registroForm!: FormGroup;

  libro:any=[];

  constructor(private router:Router,private service:AuthService) { }
  nuevolibro(){
    this.router.navigate(['ini/addlib'])
  }

  ngOnInit(): void {
    this.service.getLibros().subscribe(
      res=>{
        this.libro=res;
        console.log(res)
      },
      err=>console.error(err)
    );
  }
  editarlib(libro:Libro){
    localStorage.setItem("id",libro.id.toString());
    this.router.navigate(['ini/editlib'])

  }
  deleteLibro(id:string){
    this.service.deletLibro(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
      },
      err=>{
        console.error(err)
        
      }
      

    )
  }
 
    
  

}
