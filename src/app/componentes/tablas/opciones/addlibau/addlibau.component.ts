import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroAutor } from 'src/app/modelos/libroautor';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-addlibau',
  templateUrl: './addlibau.component.html',
  styleUrls: ['./addlibau.component.scss']
})
export class AddlibauComponent implements OnInit {

  libroautor: LibroAutor={
    id:0,
    libro_id:"",
    autor_id:""
  };
  libro:any=[]
  autores:any=[]

  constructor(private router:Router,private service:AuthService,private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getLibros().subscribe(
      res=>{
        this.libro=res;
        console.log(this.libro,"SI ENTRO");
      },
      err=>console.error(err)
    );

    this.service.getAutores().subscribe(
      res=>{
        this.autores=res;
        console.log(this.autores,"SI ENTRO");
      },
      err=>console.error(err)
    );

  }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  
  Guardarlibroautor(){
    console.log(this.libroautor)
this.service.addLibroautor(this.libroautor).subscribe(
  res=>{
    console.log(res),
    alert("AGREGADO")
    this.router.navigate(['ini/inicio']);
  },
  err=>{
    console.error(err,"ERROR")
   
  }
)
  }

}
