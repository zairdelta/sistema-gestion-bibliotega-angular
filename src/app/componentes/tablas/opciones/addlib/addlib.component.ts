import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router ,ActivatedRoute} from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { Editorial } from 'src/app/modelos/editorial';
import { Libro } from 'src/app/modelos/libro';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-addlib',
  templateUrl: './addlib.component.html',
  styleUrls: ['./addlib.component.scss']
})
export class AddlibComponent implements OnInit {
  libro: Libro={
    id:0,
    titulo: "",
    descripcion:"",
    editorial_id:"",
    estante_id:""
  };
  estante:any=[]
  editorial:any=[]

  edit:boolean=false;
  constructor(private router:Router,private service:AuthService,private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getEstantes().subscribe(
      res=>{
        this.estante=res;
        console.log(this.estante,"SI ENTRO");
      },
      err=>console.error(err)
    );

    this.service.getEditoriales().subscribe(
      res=>{
        this.editorial=res;
        console.log(this.editorial,"SI ENTRO");
      },
      err=>console.error(err)
    );

  }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  myGroup = new FormGroup({
    firstName: new FormControl()
});
  Guardarlibro(){
    console.log(this.libro)
this.service.addLibro(this.libro).subscribe(
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
