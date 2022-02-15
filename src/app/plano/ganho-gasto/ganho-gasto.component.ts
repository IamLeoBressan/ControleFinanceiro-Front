import { Component, Input, OnInit } from '@angular/core';
import { GanhoService } from 'src/app/data/ganho.service';
import { Ganho } from 'src/app/data/interfaces/ganho';

@Component({
  selector: 'app-ganho-gasto',
  templateUrl: './ganho-gasto.component.html',
  styleUrls: ['./ganho-gasto.component.css']
})
export class GanhoGastoComponent implements OnInit {

  constructor(private ganhoService: GanhoService) { }

  @Input() ModoEdicao: boolean;

  @Input() ganho: Ganho;

  EdicaoCampos: boolean;

  ValorAlterado: string;
  TituloAlterado: string;

  GanhoBackup: Ganho;



  ngOnInit(): void {
    this.ValorAlterado = String(this.ganho.valor);
    this.TituloAlterado = this.ganho.titulo;
  }

  OnClickToggleEdicaoCampos(){

    if(this.EdicaoCampos){

      let ganhoEnvio = Object.assign({}, this.ganho);

      ganhoEnvio.valor = parseFloat(this.ValorAlterado);
      ganhoEnvio.titulo = this.TituloAlterado;



      this.ganhoService.EditarGanho(ganhoEnvio).subscribe(
        result => {
          this.EdicaoCampos = !this.EdicaoCampos;
          this.ganho = ganhoEnvio;
        },
        error =>{
          this.ValorAlterado = String(this.ganho.valor);
          this.TituloAlterado = this.ganho.titulo;
        }
      )
    }else{
      this.EdicaoCampos = !this.EdicaoCampos;
    }

  }

  TituloBotaoEdicao():string{
    if(this.EdicaoCampos){
      return "Confirmar"
    }else{
      return "Editar"
    }
  }

  TituloCancelarRemover():string{
    if(this.EdicaoCampos){
      return "Cancelar"
    }else{
      return "Remover"
    }
  }

  OnClickCancelarRemoverCampo(){
    if(this.EdicaoCampos){
      this.ValorAlterado = String(this.ganho.valor);
      this.TituloAlterado = this.ganho.titulo;

      this.EdicaoCampos = !this.EdicaoCampos;
    }
  }

  onChangeValor(){
    this.ganho.valor = parseFloat(this.ValorAlterado);
  }

}
