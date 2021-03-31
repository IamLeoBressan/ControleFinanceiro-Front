import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPrevisaoComponent } from '../lista-previsao/lista-previsao.component';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { ListaPlanosComponent } from '../lista-planos/lista-planos.component';
import { CadastroPlanosComponent } from '../cadastro-planos/cadastro-planos.component';
import { ResumoPlanoComponent } from '../resumo-plano/resumo-plano.component';
import { DetalhesCiclosComponent } from '../detalhes-ciclos/detalhes-ciclos.component';

@NgModule({
  declarations: [
    BarraSuperiorComponent,
    ListaPrevisaoComponent,
    ListaPlanosComponent,
    CadastroPlanosComponent,
    ResumoPlanoComponent,
    DetalhesCiclosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BarraSuperiorComponent,
    ListaPrevisaoComponent,
    ResumoPlanoComponent
  ]
})
export class PlanosModule { }
