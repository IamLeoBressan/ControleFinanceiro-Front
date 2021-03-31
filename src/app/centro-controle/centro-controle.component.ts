import { Component, OnInit } from '@angular/core';
import { PlanoService } from '../data/plano.service';
import { IPlano } from '../data/interfaces/plano';

@Component({
  templateUrl: './centro-controle.component.html',
  styleUrls: ['./centro-controle.component.css']
})
export class CentroControleComponent implements OnInit {

  constructor(private planoService: PlanoService) { }

  PlanoSelecionado: IPlano;

  Planos: IPlano[];

  ngOnInit(): void {
    this.planoService.BuscarPlanos().subscribe(
      result => {
        this.Planos = result;
        this.PlanoSelecionado = result[0];
      },
      error => {
        console.log("Centro Controle erro: " + error);
      }
    )
  }

  AtualizarPlano(plano: IPlano){
    console.log(plano);
    this.PlanoSelecionado = plano;
  }

}
