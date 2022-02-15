import { Component, OnInit, Input } from '@angular/core';
import { IPlano } from '../../data/interfaces/plano';
import { PlanoService } from '../../data/plano.service';
import { IResumoFinanceiro } from '../../data/interfaces/resumo-financeiro';

@Component({
  selector: 'app-lista-previsao',
  templateUrl: './lista-previsao.component.html',
  styleUrls: ['./lista-previsao.component.css']
})
export class ListaPrevisaoComponent implements OnInit {

  constructor(private planoService: PlanoService) { }

  MesesPorSolicitacao: number =  10;
  PrevisoesFinanceiras: IResumoFinanceiro[];
  @Input() PlanoSelecionado: IPlano;

  ngOnInit(): void {

  }



  ngOnChanges(){
    if(!this.PlanoSelecionado){
      return;
    }

    console.log("alterações");



    this.planoService.GerarRendimentos(this.PlanoSelecionado.id, this.MesesPorSolicitacao).subscribe(
      result => {
        this.PrevisoesFinanceiras = result;
      },
      error => {
        if(error.status == 400){
          this.PrevisoesFinanceiras = null;
        }else{
          console.log(error);
        }
      }
    )
  }



}
