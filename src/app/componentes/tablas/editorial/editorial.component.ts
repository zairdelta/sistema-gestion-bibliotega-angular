import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { errorMessage, timeMessage } from 'src/app/funciones/alertas';
import { Editorial } from 'src/app/modelos/editorial';
import { AuthService } from 'src/app/servicio/auth.service';


@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {
  registroForm!: FormGroup;

  editorial:any=[];

  constructor(private router:Router,private service:AuthService) { }

  nuevoautor(){
    this.router.navigate(['ini/added'])
  }
  ngOnInit(): void {
    this.service.getEditoriales().subscribe(
      res=>{
        this.editorial=res;
      },
      err=>console.error(err)
    );
  }
  editared(editorial:Editorial){
    localStorage.setItem("id",editorial.id.toString());
    this.router.navigate(['ini/edited'])

  }
  deleteeditorial(id:string){
    this.service.deletEditorial(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();
      },
      err=>console.error(err)

    )
  }

}
