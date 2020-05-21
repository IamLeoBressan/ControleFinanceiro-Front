import { Component, OnInit } from '@angular/core';
import { IPlano } from '../data/plano';
import { PlanoService } from '../data/plano.service';

@Component({
  templateUrl: './lista-planos.component.html',
  styleUrls: ['./lista-planos.component.css'],
})
export class ListaPlanosComponent implements OnInit {
  constructor(private planoService: PlanoService) {}

  PopUp: boolean = false;
  Planos: IPlano[];

  CadastrarPlano() {
    this.PopUp = true;
  }

  ngOnInit(): void {

    let token: String = localStorage.getItem("token");

    let planos = this.planoService.BuscarPlanos()
      .subscribe((planos: IPlano[]) => {
        console.log(planos);
        this.Planos = planos;
      });


  }

  FecharPopUp() {
    this.PopUp = false;
  }
}
