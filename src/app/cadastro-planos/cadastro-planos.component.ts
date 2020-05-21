import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IPlano} from '../data/plano';

@Component({
  selector: 'app-cadastro-planos',
  templateUrl: './cadastro-planos.component.html',
  styleUrls: ['./cadastro-planos.component.css']
})
export class CadastroPlanosComponent implements OnInit {

  constructor() { }

  plano: IPlano = {
    id: 0,
    titulo: '',
    valorBase: 0
  }

  ngOnInit(): void {
  }

}
