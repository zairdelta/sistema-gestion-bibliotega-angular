import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { errorMessage, successDialog } from 'src/app/funciones/alertas';
import { Editorial } from 'src/app/modelos/editorial';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-added',
  templateUrl: './added.component.html',
  styleUrls: ['./added.component.scss']
})
export class AddedComponent implements OnInit {
  editorial: Editorial={
    id:0,
    nombre:'',
    direccion:'',   
  };
  editoriales!: any[];

  edit:boolean=false;
  constructor(private router:Router,private service:AuthService,private activedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.saberestantes();
  }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
    
  GuardarEditorial(){
this.service.addEditorial(this.editorial).subscribe(
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
  saberestantes(){
    this.service.getEditoriales().subscribe((data:any)=>{
    
       this.editoriales=data.nombre;
       console.log(data.nombre)
      })
    }
}
