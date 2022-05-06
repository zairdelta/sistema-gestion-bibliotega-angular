import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, timeMessage } from 'src/app/funciones/alertas';
import { Estante } from 'src/app/modelos/estante';
import { AuthService } from 'src/app/servicio/auth.service';


@Component({
  selector: 'app-estantes',
  templateUrl: './estantes.component.html',
  styleUrls: ['./estantes.component.scss']
})
export class EstantesComponent implements OnInit {
  registroForm!: FormGroup;

  estante:any=[];

  constructor(private router:Router,private service:AuthService) { }
  nuevoautor(){
    this.router.navigate(['ini/addes'])
  }
  ngOnInit(): void {
    this.service.getEstantes().subscribe(
      res=>{
        this.estante=res;
      },
      err=>console.error(err)
    );
  }
  editares(estante:Estante){
    localStorage.setItem("id",estante.id.toString());
    this.router.navigate(['ini/edites'])

  }
  deleteEstante(id:string){
    this.service.deletEstante(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
      },
      err=>console.error(err)

    )
  }

}
