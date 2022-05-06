import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { Usuario } from 'src/app/modelos/usuario';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-addus',
  templateUrl: './addus.component.html',
  styleUrls: ['./addus.component.scss']
})
export class AddusComponent implements OnInit {
  usuario: Usuario={
    id:0,
    nombre:'',
    correo:'',
    telefono:0,  
  };
  edit:boolean=false;
  constructor(private router:Router,private service:AuthService,private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
    
  GuardarUsuario(){
this.service.addUsuario(this.usuario).subscribe(
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
