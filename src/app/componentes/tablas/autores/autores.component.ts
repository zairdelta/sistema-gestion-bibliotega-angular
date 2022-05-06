/*---------------------------------ZAIRDELTA----------------------------------------*/

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, timeMessage } from 'src/app/funciones/alertas';
import { Autores } from 'src/app/modelos/autores';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.scss']
})

export class AutoresComponent implements OnInit {
  registroForm!: FormGroup;

  autores:any=[];
  constructor(private router:Router,private service:AuthService){}

  nuevoautor(){
    this.router.navigate(['ini/add'])
  }
  
  ngOnInit(): void {
    
    this.service.getAutores().subscribe(
      res=>{
        this.autores=res;
      },
      err=>console.error(err)
    );
  }
  editarau(autores:Autores){
    localStorage.setItem("id",autores.id.toString());
    this.router.navigate(['ini/editau'])

  }
  deleteautor(id:string){
    this.service.deletAutores(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
      },
      err=>console.error(err)

    )
  }
 
  
}
