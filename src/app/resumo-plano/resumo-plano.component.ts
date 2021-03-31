import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPlano } from '../data/interfaces/plano';
import { PlanoService } from '../data/plano.service';

@Component({
  selector: 'app-resumo-plano',
  templateUrl: './resumo-plano.component.html',
  styleUrls: ['./resumo-plano.component.css'],
})
export class ResumoPlanoComponent implements OnInit {
  constructor(private planoService: PlanoService) {}

  @Input() atualizarPlano: any;
  @Input() Planos: IPlano[];
  @Input() PlanoSelecionado: IPlano;

  ngOnChanges(){
    this.atualizarPlano(this.PlanoSelecionado);
  }

  ngOnInit(): void {

  }
}
