import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPlano } from './plano';
import { catchError, map, tap } from 'rxjs/operators';

const BUSCAR_PLANOS_API = "https://localhost:44390/planos";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(private http: HttpClient) { }

  BuscarPlanos(): Observable<IPlano[]> {

    return this.http.get<IPlano[]>(BUSCAR_PLANOS_API, httpOptions)
    .pipe(
      tap(_ => console.log('fetched planos')),
      catchError(this.handleError<IPlano[]>('getPlanos', []))
    );
  }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
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
