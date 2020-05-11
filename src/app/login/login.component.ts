import { Component, OnInit } from '@angular/core';
import { Login } from '../data/login';
import { ThrowStmt } from '@angular/compiler';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  tpSenha: string = 'password';
  imgSenha: string = 'open';
  login: Login = {
    username: 'teste',
    rememberMe: true,
    password: ''
  }

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

}
