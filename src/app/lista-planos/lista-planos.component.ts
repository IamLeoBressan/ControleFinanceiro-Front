import { Component, OnInit } from '@angular/core';
import { IPlano } from '../data/interfaces//plano';
import { PlanoService } from '../data/plano.service';

@Component({
  templateUrl: './lista-planos.component.html',
  styleUrls: ['./lista-planos.component.css'],
})
export class ListaPlanosComponent implements OnInit {
  constructor(private planoService: PlanoService) {}

  PopUp: boolean = false;
  Planos: IPlano[];
  PlanoEdicao: IPlano = null;
  MensagemRetorno: any;

  CadastrarPlano() {
    this.PopUp = true;
  }

  RemoverPlano(id: number){
    this.planoService.RemoverPlano(id).subscribe(
      result => {
        this.Planos = this.Planos.filter(plano => plano.id != id);
      },
      error =>{
        //this.MensagemRetorno = 'Ocorreu um erro ao Remover o plano com id = ' + id + '\n';
        this.MensagemRetorno = error;
      }
    )
  }

  EditarPlano(plano: IPlano){
    this.PopUp = true;
    this.PlanoEdicao = plano;
  }

  ngOnInit(): void {

    let token: String = localStorage.getItem("token");

    let planos = this.planoService.BuscarPlanos()
      .subscribe((planos: IPlano[]) => {
        this.Planos = planos;
      });
  }

  AtualizarLista(newPlan: IPlano){
    let index = this.Planos.findIndex(plano => plano.id == newPlan.id);

    if(index >= 0){
      this.Planos[index] = newPlan;
    }else{
      this.Planos.push(newPlan);
    }

  }


  FecharPopUp() {
    this.PopUp = false;
    this.PlanoEdicao = null;
  }
}
