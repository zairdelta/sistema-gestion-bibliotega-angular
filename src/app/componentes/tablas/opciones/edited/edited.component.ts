import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Editorial } from 'src/app/modelos/editorial';
import { AuthService } from 'src/app/servicio/auth.service';
import { AutoresComponent } from '../../autores/autores.component';

@Component({
  selector: 'app-edited',
  templateUrl: './edited.component.html',
  styleUrls: ['./edited.component.scss']
})
export class EditedComponent implements OnInit {
  editorial:any=[];

  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }

  ngOnInit(): void {
    this.EditarEd()
  }
  EditarEd(){
    let id:string|null|number=localStorage.getItem("id");
    this.service.getEditorial(id).subscribe(data=>{
      this.editorial=data;
    })
  }
  actualizar(editorial:Editorial){
    this.service.updateEditorial(editorial).subscribe(data=>{
      this.editorial=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }
}
