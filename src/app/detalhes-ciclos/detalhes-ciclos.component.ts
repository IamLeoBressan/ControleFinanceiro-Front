import { Component, OnInit, Input } from '@angular/core';
import { ICiclo } from '../data/interfaces/ciclo';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detalhes-ciclos',
  templateUrl: './detalhes-ciclos.component.html',
  styleUrls: ['./detalhes-ciclos.component.css']
})
export class DetalhesCiclosComponent implements OnInit {

  constructor() { }
  filmIcon = faFilm;
  @Input() ciclos: ICiclo[];

  CicloAtivo: ICiclo;

  ngOnChanges(){

    if(this.ciclos){
      this.CicloAtivo =this.ciclos[0];
    }else{
      this.CicloAtivo = null;
    }
  }

  ngOnInit(): void {
  }

  CssCicloAtivo(id: number): string{
    return id == this.CicloAtivo.id? "active": "";
  }

  CicloClick(ciclo: ICiclo){
    this.CicloAtivo = ciclo;
  }

  TotalGastos(){
    return this.CicloAtivo.gastos.reduce((acum, value) => acum + value.valor, 0);
  }

  TotalGanhos(){
    return this.CicloAtivo.ganhos.reduce((acum, value) => acum + value.valor, 0);
  }
}
