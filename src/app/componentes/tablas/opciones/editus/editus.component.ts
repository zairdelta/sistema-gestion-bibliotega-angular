import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { Usuario } from 'src/app/modelos/usuario';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-editus',
  templateUrl: './editus.component.html',
  styleUrls: ['./editus.component.scss']
})

export class EditusComponent implements OnInit {
  usuario:any=[];
  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  ngOnInit(): void {
    this.EditarUs()
  }
  EditarUs(){
    let id:string|null|number=localStorage.getItem("id");
    this.service.getUsuario(id).subscribe(data=>{
      this.usuario=data;
    })
  }
  actualizar(usuario:Usuario){
    this.service.updateUsuario(usuario).subscribe(data=>{
      this.usuario=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }

}
