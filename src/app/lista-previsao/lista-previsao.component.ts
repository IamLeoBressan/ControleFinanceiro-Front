import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-previsao',
  templateUrl: './lista-previsao.component.html',
  styleUrls: ['./lista-previsao.component.css']
})
export class ListaPrevisaoComponent implements OnInit {

  constructor() { }

  PrevisoesFinanceiras: any[];

  ngOnInit(): void {
  }

}
