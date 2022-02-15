import { Component, Input, OnInit } from '@angular/core';
import { ICiclo } from 'src/app/data/interfaces/ciclo';
import { Ganho } from 'src/app/data/interfaces/ganho';

@Component({
  selector: 'lista-ganho-gasto',
  templateUrl: './lista-ganho-gasto.component.html',
  styleUrls: ['./lista-ganho-gasto.component.css']
})
export class ListaGanhoGastoComponent implements OnInit {

  constructor() { }

  @Input() ganhos: Ganho[];

  Editar: boolean = false;

  ngOnInit(): void {
  }

  TotalGanhos(){

    return this.ganhos.reduce((acum, ganho) => {

      let valor = ganho.valor;

      // console.log(ganho);

      return acum + ganho.valor
    }, 0);
  }

  ToggleEdit(){
    this.Editar = !this.Editar;
  }

  TextoBotaoEdit(){
    if(this.Editar){
      return "Finalizar";
    }else{
      return "Editar";
    }

  }

}
