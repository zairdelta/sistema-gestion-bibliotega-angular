import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { VigilanteGuard } from './vigilante.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    

  ],
  providers: [CookieService,
  {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true},
    VigilanteGuard],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
