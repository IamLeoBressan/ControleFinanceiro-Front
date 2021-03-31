import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPlano } from './interfaces/plano';
import { catchError, map, tap } from 'rxjs/operators';
import { IResumoFinanceiro } from './interfaces/resumo-financeiro';

const PLANOS_API = "https://localhost:44390/planos";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PlanoService {

  constructor(private http: HttpClient) { }

  BuscarPlanos(): Observable<IPlano[]> {

    return this.http.get<IPlano[]>(PLANOS_API, httpOptions)
    .pipe(
      catchError(this.handleError<IPlano[]>('getPlanos', []))
    );
  }

  EditarPlano(plano: IPlano): Observable<IPlano>{
    return this.http.put<IPlano>(PLANOS_API, plano);
  }

  CadastrarPlano(plano: IPlano): Observable<IPlano>{
    plano.id = null;
    return this.http.post<IPlano>(PLANOS_API, plano, httpOptions);
  }

  RemoverPlano(id: number): Observable<any>{
    return this.http.delete(PLANOS_API + "/" + id);
  }

  GerarRendimentos(planoId: number, meses: number): Observable<IResumoFinanceiro[]>{
    return this.http.get<IResumoFinanceiro[]>(PLANOS_API + "/" + planoId + "/rendimentos/" + meses, httpOptions);

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
