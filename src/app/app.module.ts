import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CentroControleComponent } from './centro-controle/centro-controle.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { authInterceptorProviders } from './login/auth-interceptor';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { PlanosModule } from './plano/plano.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CentroControleComponent,
    PopUpComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    PlanosModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
    FontAwesomeModule
    // StoreModule.forRoot({}, {})
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
