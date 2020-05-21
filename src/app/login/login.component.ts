import { Component, OnInit } from '@angular/core';
import { Login } from '../data/login';
import { AuthService } from '../data/auth.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
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

  onSubmit(){
    this.authService.Logar(this.login).subscribe(
      token => {
        this.storage.saveToken(token.token);
        this.router.navigate(["/home"]);
      },
      error =>
      {
        this.mensagemRetorno = error.error.mensagens.join("\n");

        this.login.UserName = '';
        this.login.Password = '';
      }
    )
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
