import { Component, OnInit } from '@angular/core';
import { IUsuario } from '../data/interfaces/usuario';
import { AuthService } from '../data/auth.service';
import { TokenStorageService } from '../login/token-storage.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  constructor(
      private authService : AuthService,
      private tokenStorage: TokenStorageService,
      private router: Router
  ) { }

  mensagemRetorno: any;

  Usuario: IUsuario = {
    nome: 'Leonardo',
    sobrenome: 'Bressan',
    email: 'leo@leo.com.br',
    userName: 'catman3',
    password: '123456',
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.CriarUsuario(this.Usuario).subscribe(
      result => {
        this.tokenStorage.saveToken(result.token);
        this.router.navigate(['/home']);
      },
      error => {
        this.mensagemRetorno = error.error;
      }
    )
  }

  OnVoltarClick(){
    this.router.navigate(['/login']);
  }

}
