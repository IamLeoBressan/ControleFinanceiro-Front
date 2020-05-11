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

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ListaPrevisaoComponent,
    LoginComponent,
    CentroControleComponent,
    ListaPlanosComponent,
    PopUpComponent,
    CadastroPlanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
