import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estante } from 'src/app/modelos/estante';
import { AuthService } from 'src/app/servicio/auth.service';
@Component({
  selector: 'app-edites',
  templateUrl: './edites.component.html',
  styleUrls: ['./edites.component.scss']
})
export class EditesComponent implements OnInit {
  estante:any=[];

  constructor(private router:Router,private service:AuthService) { }
  regresarAut(){
    this.router.navigate(['ini/inicio'])
  }
  ngOnInit(): void {
    this.EditarEs()
  }
  EditarEs(){
    let id:string|null|number=localStorage.getItem("id");
    this.service.getEstante(id).subscribe(data=>{
      this.estante=data;
    })
  }
  actualizar(estante:Estante){
    this.service.updateEstante(estante).subscribe(data=>{
      this.estante=data;
      alert("actualizado con exito")
      this.router.navigate(["ini/inicio"])
    })
  }

}
