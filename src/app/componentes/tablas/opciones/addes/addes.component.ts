import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { Estante } from 'src/app/modelos/estante';
import { AuthService } from 'src/app/servicio/auth.service';
@Component({
  selector: 'app-addes',
  templateUrl: './addes.component.html',
  styleUrls: ['./addes.component.scss']
})
export class AddesComponent implements OnInit {
  estante: Estante={
    id:0,
    numero:0,
    seccion:'',   
  };
  edit:boolean=false;
  constructor(private router:Router,private service:AuthService,private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
    
  GuardarEstante(){
this.service.addEstante(this.estante).subscribe(
  res=>{
    console.log(res),
    alert("AGREGADO")
    this.router.navigate(['ini/inicio']);
  },
  err=>{
    console.error(err,"AQUI ERROR")
   alert("La seccion ya existe")
  }
)
  }
}
