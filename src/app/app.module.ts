import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CentroControleComponent } from './centro-controle/centro-controle.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { authInterceptorProviders } from './login/auth-interceptor';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { PlanosModule } from './plano/plano.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CentroControleComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    PlanosModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      name: "APM Demo App DevTools",
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
