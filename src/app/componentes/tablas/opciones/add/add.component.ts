import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { Autores } from 'src/app/modelos/autores';
import { AuthService } from 'src/app/servicio/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  autores: Autores={
    id:0,
    nombre:'',
    nacionalidad:'',
   
  };
  edit:boolean=false;
  resultado!: string;
  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    nacionalidad: new FormControl('', [Validators.required]),
    
  });
  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
  constructor(private router:Router,private service:AuthService,private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    
  }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
    
  Guardarautor(){
this.service.addAutores(this.autores).subscribe(
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
