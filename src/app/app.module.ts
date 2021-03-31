import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListaPrevisaoComponent } from './lista-previsao/lista-previsao.component';
import { LoginComponent } from './login/login.component';
import { CentroControleComponent } from './centro-controle/centro-controle.component';
import { ListaPlanosComponent } from './lista-planos/lista-planos.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CadastroPlanosComponent } from './cadastro-planos/cadastro-planos.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { authInterceptorProviders } from './login/auth-interceptor';
import { ResumoPlanoComponent } from './resumo-plano/resumo-plano.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { DetalhesCiclosComponent } from './detalhes-ciclos/detalhes-ciclos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { planoReducer } from './state/plano-reducer';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ListaPrevisaoComponent,
    LoginComponent,
    CentroControleComponent,
    ListaPlanosComponent,
    PopUpComponent,
    CadastroPlanosComponent,
    ResumoPlanoComponent,
    DetalhesCiclosComponent,
    CadastroUsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('planos', planoReducer)
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
