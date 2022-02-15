import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPrevisaoComponent } from './lista-previsao/lista-previsao.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ListaPlanosComponent } from './lista-planos/lista-planos.component';
import { CadastroPlanosComponent } from './cadastro-planos/cadastro-planos.component';
import { ResumoPlanoComponent } from './resumo-plano/resumo-plano.component';
import { DetalhesCiclosComponent } from './detalhes-ciclos/detalhes-ciclos.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreModule } from '@ngrx/store';
import { planosReducer } from './state/plano.reducer';
import { ListaGanhoGastoComponent } from './lista-ganho-gasto/lista-ganho-gasto.component';
import { GanhoGastoComponent } from './ganho-gasto/ganho-gasto.component';

@NgModule({
  declarations: [
    BarraSuperiorComponent,
    ListaPrevisaoComponent,
    ListaPlanosComponent,
    CadastroPlanosComponent,
    ResumoPlanoComponent,
    DetalhesCiclosComponent,
    ListaGanhoGastoComponent,
    GanhoGastoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ButtonsModule,
    RouterModule,
    FontAwesomeModule,
    SharedModule,
    StoreModule.forFeature('planos', planosReducer)
  ],
  exports:[
    BarraSuperiorComponent,
    ListaPrevisaoComponent,
    ResumoPlanoComponent
  ]
})
export class PlanosModule { }
