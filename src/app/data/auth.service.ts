import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {IToken} from './token';
import { tap, catchError, map } from 'rxjs/operators';

const AUTH_API = 'http://localhost:59710/users/login/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  Logar(Login: Login): Observable<IToken> {
    return this.http.post<IToken>(AUTH_API, Login, httpOptions)
      .pipe(
        // map((token: any) => <IToken> {Token: token.token, Expiration: token.expiration}),
        tap((token: IToken) => console.log(token)),
        catchError(this.handleError<IToken>('logarService'))
      )
    ;
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
