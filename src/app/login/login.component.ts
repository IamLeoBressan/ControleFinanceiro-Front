import { Component, OnInit } from '@angular/core';
import { Login } from '../data/interfaces/login';
import { AuthService } from '../data/auth.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: TokenStorageService ) { }

  tpSenha: string = 'password';
  imgSenha: string = 'open';
  mensagemRetorno: any;
  login: Login = {
    UserName: '',
    Password: ''
  }

  token:Token;

  VisualizarSenha(): void{
    if(this.tpSenha === 'password'){
      this.tpSenha = 'text';
      this.imgSenha = 'lock';
    }else{
      this.tpSenha = 'password';
      this.imgSenha = 'open';
    }
  }

  ngOnInit(): void {

  }

  onRegistrarClick(){
    this.router.navigate(["/novoUsuario"]);
  }

  onSubmit(){
    this.authService.Logar(this.login).subscribe(
      result => {
        this.storage.saveToken(result.token);
        this.router.navigate(["/home"]);
      },
      error =>
      {
        if(error.error.mensagens){
          this.mensagemRetorno = error.error.mensagens;
        }else{
          this.mensagemRetorno = error.message;
        }

        this.login.UserName = '';
        this.login.Password = '';
      }
    )
  }
}
