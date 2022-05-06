import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestamo } from 'src/app/modelos/prestamo';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.scss']
})
export class AddpresComponent implements OnInit {
  prestamos: Prestamo={
    id:0,
    libro_id:"",
    usuario_id:""
  };
  libro:any=[]
  usuarios:any=[]
  constructor(private router:Router,private service:AuthService,private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getLibros().subscribe(
      res=>{
        this.libro=res;
        console.log(this.libro,"SI ENTRO libro");
      },
      err=>console.error(err)
    );

    this.service.getUsuarios().subscribe(
      res=>{
        this.usuarios=res;
        console.log(this.usuarios,"SI ENTRO usuarios");
      },
      err=>console.error(err)
    );

  }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  
  GuardarPrestamo(){
    console.log(this.prestamos)
this.service.addPrestamo(this.prestamos).subscribe(
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
