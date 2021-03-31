import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TokenStorageService } from '../login/token-storage.service';
import { Router } from '@angular/router';
import { IPlano } from '../data/interfaces/plano';
import { PlanoService } from '../data/plano.service';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {

  constructor(private router: Router, private tokenStore: TokenStorageService, private _planoService: PlanoService) { }

  @Input() PlanoSelecionado : IPlano;
  @Input() AtualizarPlano: any;

  ngOnInit(): void {

  }

  onChangeValorBase(){
    this._planoService.EditarPlano(this.PlanoSelecionado)
      .subscribe(
        (result) => {
          this.AtualizarPlano(this.PlanoSelecionado);
        },
        (error) => {

        });
  }

  LoggoutClick():void{

    this.tokenStore.signOut();
    this.router.navigate(['/login']);
  }

}
