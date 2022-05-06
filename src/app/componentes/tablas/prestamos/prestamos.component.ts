import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prestamo } from 'src/app/modelos/prestamo';
import { AuthService } from 'src/app/servicio/auth.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {

  constructor(private router:Router,private service:AuthService) { }
  prestamo:any=[];

  nuevolibroautor(){
    this.router.navigate(['ini/addpres'])
  }

  ngOnInit(): void {
    this.service.getPrestamos().subscribe(
      res=>{
        this.prestamo=res;
        console.log(this.prestamo,"PRESTAMOS")
      },
      err=>console.error(err)
    );
  }
  editarPrestamo(prestamo:Prestamo){
    localStorage.setItem("id",prestamo.id.toString());
    this.router.navigate(['ini/editpres'])

  }
  deletePrestamo(id:string){
    this.service.deletPrestamo(id).subscribe(
      res=>{
        console.log(res)
        this.ngOnInit();

      
      },
      err=>{console.error(err)

    }
    )
  }
}
