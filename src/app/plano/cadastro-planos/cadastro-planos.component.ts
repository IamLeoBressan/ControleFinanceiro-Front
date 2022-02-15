import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IPlano } from '../../data/interfaces/plano';
import { PlanoService } from '../../data/plano.service';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro-planos',
  templateUrl: './cadastro-planos.component.html',
  styleUrls: ['./cadastro-planos.component.css'],
})
export class CadastroPlanosComponent implements OnInit {
  constructor(private planoService: PlanoService) {}

  @Input() PlanoEdicao: IPlano;

  @Input() atualizaLista: any;
  @Output() closePop: EventEmitter<string> = new EventEmitter<string>();
  edicao: boolean = false;
  titulo: string = 'Cadastro de novo plano';
  mensagemRetorno: any;

  Plano: IPlano = {
    id: 0,
    titulo: '',
    valorBase: 0,
    ciclos: []
  };

  ngOnInit(): void {
    if (this.PlanoEdicao != null) {
      this.edicao = true;
      this.titulo = 'Edição de plano';
      this.Plano = this.PlanoEdicao;
    }
  }

  SalvarClick(): void {
    (this.edicao?
      this.planoService.EditarPlano(this.Plano):
      this.planoService.CadastrarPlano(this.Plano)
    ).subscribe(
      (result) => {
        this.atualizaLista(result);
        this.closePop.emit();
      },
      (error) => {
        this.mensagemRetorno = error;
      }
    );
  }

  LimparForm() {
    this.Plano = { id: 0, titulo: '', valorBase: 0, ciclos: [] };
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
