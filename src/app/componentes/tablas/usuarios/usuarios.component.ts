import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, timeMessage } from 'src/app/funciones/alertas';
import { Usuario } from 'src/app/modelos/usuario';
import { AuthService } from 'src/app/servicio/auth.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  registroForm!: FormGroup;

  usuario:any=[];

  constructor(private router:Router,private service:AuthService) { }
  nuevoUsuario(){
    this.router.navigate(['ini/addus'])
  }

  ngOnInit(): void {
    this.service.getUsuarios().subscribe(
      res=>{
        this.usuario=res;
      },
      err=>console.error(err)
    );
  }
  editarus(usuario:Usuario){
    localStorage.setItem("id",usuario.id.toString());
    this.router.navigate(['ini/editus'])

  }
  deleteUsuario(id:string){
    this.service.deletUsuario(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
      },
      err=>console.error(err)

    )
  }

}
