/*---------------------------------ZAIRDELTA----------------------------------------*/
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from '../modelos/user';
import { Autores } from '../modelos/autores';
import { Editorial } from '../modelos/editorial';
import { Estante } from '../modelos/estante';
import { Libro } from '../modelos/libro';
import { Usuario } from '../modelos/usuario';
import { Prestamo } from '../modelos/prestamo';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL=environment.apiURL;
  constructor(private http:HttpClient) { }
/*--------------------------------LOGIN Y REGISTRO----------------------------------*/
/*-------------------------------------TOKEN----------------------------------------*/
  gettoken(){
    return this.http.get<any>(`${this.apiURL}token`);
  }
  registro(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}register`,user);
  }

  login(user:User):Observable<any>{
    return this.http.post(`${this.apiURL}login`,user);
  }
/*-----------------------------------AUTORES----------------------------------------*/
  getAutores(){
    return this.http.get<Autores[]>(`${this.apiURL}autores`);
    }
  addAutores(autores:Autores){
    return this.http.post(`${this.apiURL}autores`,autores);
    }
  getAutor(id:number|string|null){
    return this.http.get(`${this.apiURL}autores/${id}`);
    }
  deletAutores(id:string){
    return this.http.delete(`${this.apiURL}autores/${id}`);
    }
  updateAutores(updateAutores:Autores):Observable<Autores>{
    return this.http.patch<Autores>(`${this.apiURL}autores/${updateAutores.id}`,updateAutores)
    }
/*---------------------------------EDITORIAL----------------------------------------*/
  getEditoriales(){
      return this.http.get<Editorial[]>(`${this.apiURL}editorial`);
    }
  addEditorial(editorial:Editorial){
      return this.http.post(`${this.apiURL}editorial`,editorial);
    }
  getEditorial(id:number|string|null){
      return this.http.get(`${this.apiURL}editorial/${id}`);
    }
  deletEditorial(id:string){
      return this.http.delete(`${this.apiURL}editorial/${id}`);
    }
  updateEditorial(updateEditorial:Editorial):Observable<Editorial>{
      return this.http.patch<Editorial>(`${this.apiURL}editorial/${updateEditorial.id}`,updateEditorial)
    }
/*---------------------------------ESTANTE----------------------------------------*/
  getEstantes(){
      return this.http.get<Estante[]>(`${this.apiURL}estante`);
    }
  addEstante(estante:Estante){
      return this.http.post(`${this.apiURL}estante`,estante);
    }
  getEstante(id:number|string|null){
      return this.http.get(`${this.apiURL}estante/${id}`);
    }
  deletEstante(id:string){
      return this.http.delete(`${this.apiURL}estante/${id}`);
    }
  updateEstante(updateEstante:Estante):Observable<Estante>{
      return this.http.patch<Estante>(`${this.apiURL}estante/${updateEstante.id}`,updateEstante)
    }
/*---------------------------------LIBROS----------------------------------------*/
  getLibros(){
      return this.http.get<Libro[]>(`${this.apiURL}libro`);
  }
  addLibro(libro:Libro){
      return this.http.post(`${this.apiURL}libro`,libro);
  }
  getLibro(id:number|string|null){
      return this.http.get(`${this.apiURL}libro/${id}`);
  }
  deletLibro(id:string){
      return this.http.delete(`${this.apiURL}libro/${id}`)
      .pipe(
        catchError((err) => {


          alert("Este campo esta relacionado con otra tabla, verificalo porfavor y vuelve a intentarlo")
          //Handle the error here
  
          return throwError(err);    //Rethrow it back to component
        }))
  }
  updateLibro(updateLibro:Libro):Observable<Libro>{
      return this.http.patch<Libro>(`${this.apiURL}libro/${updateLibro.id}`,updateLibro)
}
/*---------------------------------USUARIOS----------------------------------------*/
  getUsuarios(){
    return this.http.get<Usuario[]>(`${this.apiURL}usuario`);
  }
  addUsuario(usuario:Usuario){
    return this.http.post(`${this.apiURL}usuario`,usuario);
  }
  getUsuario(id:number|string|null){
    return this.http.get(`${this.apiURL}usuario/${id}`);
  }
  deletUsuario(id:string){
    return this.http.delete(`${this.apiURL}usuario/${id}`);
  }
  updateUsuario(updateUsuario:Usuario):Observable<Usuario>{
    return this.http.patch<Usuario>(`${this.apiURL}usuario/${updateUsuario.id}`,updateUsuario)
  } 
  /*---------------------------------LIBROS----------------------------------------*/
  getLibrosautor(){
    return this.http.get<Libro[]>(`${this.apiURL}libroautor`);
}
addLibroautor(libroautor:Libro){
    return this.http.post(`${this.apiURL}libroautor`,libroautor);
}
getLibroautor(id:number|string|null){
    return this.http.get(`${this.apiURL}libroautor/${id}`);
}

deletLibroautor(id:string){
    return this.http.delete(`${this.apiURL}libroautor/${id}`)
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      }))
}
updateLibroautor(updateLibroautor:Libro):Observable<Libro>{
    return this.http.patch<Libro>(`${this.apiURL}libroautor/${updateLibroautor.id}`,updateLibroautor)
}

 /*---------------------------------PRESTAMO----------------------------------------*/
 getPrestamos(){
  return this.http.get<Prestamo[]>(`${this.apiURL}prestamo`);
}
addPrestamo(prestamo:Prestamo){
  return this.http.post(`${this.apiURL}prestamo`,prestamo);
}
getPrestamo(id:number|string|null){
  return this.http.get(`${this.apiURL}prestamo/${id}`);
}

deletPrestamo(id:string){
  return this.http.delete(`${this.apiURL}prestamo/${id}`)
  .pipe(
    catchError((err) => {
      console.log('error caught in service')
      console.error(err);

      //Handle the error here

      return throwError(err);    //Rethrow it back to component
    }))
}
updatePrestamo(updatePrestamo:Prestamo):Observable<Libro>{
  return this.http.patch<Prestamo>(`${this.apiURL}prestamo/${updatePrestamo.id}`,updatePrestamo)
}
}


