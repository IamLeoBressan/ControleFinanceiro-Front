import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './lista-planos.component.html',
  styleUrls: ['./lista-planos.component.css'],
})
export class ListaPlanosComponent implements OnInit {
  constructor() {}

  PopUp: boolean = true;

  CadastrarPlano() {
    this.PopUp = true;
  }

  ngOnInit(): void {}

  FecharPopUp() {
    this.PopUp = false;
  }
}
