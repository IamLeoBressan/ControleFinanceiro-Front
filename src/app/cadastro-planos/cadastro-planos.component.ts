import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Plano} from '../data/plano';

@Component({
  selector: 'app-cadastro-planos',
  templateUrl: './cadastro-planos.component.html',
  styleUrls: ['./cadastro-planos.component.css']
})
export class CadastroPlanosComponent implements OnInit {

  constructor() { }

  plano: Plano = {
    titulo: '',
    descricao: '',
    valorInicial: 0
  }

  ngOnInit(): void {
  }

}
