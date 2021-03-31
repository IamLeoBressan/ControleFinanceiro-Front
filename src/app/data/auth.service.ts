import { Injectable } from '@angular/core';
import { Login } from './interfaces/login';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IToken} from './interfaces/token';
import { tap, catchError, map } from 'rxjs/operators';
import { IUsuario } from './interfaces/usuario';

const AUTH_API = 'https://localhost:44390/users/login/';
const CREATE_USER_API = 'https://localhost:44390/users';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Logar(Login: Login): Observable<IToken> {
    return this.http.post<IToken>(AUTH_API, Login, httpOptions);
  }

  CriarUsuario(usuario: IUsuario){
    return this.http.post<IToken>(CREATE_USER_API, usuario, httpOptions);
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
