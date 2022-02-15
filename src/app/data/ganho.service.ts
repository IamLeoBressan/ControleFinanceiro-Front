import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Ganho } from './interfaces/ganho';

const GANHO_API = "https://localhost:44390/ganhos";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GanhoService {

  constructor(private http: HttpClient) { }

  EditarGanho(ganho: Ganho): Observable<Ganho>{
    return this.http.put<Ganho>(GANHO_API, ganho);
  }



}
