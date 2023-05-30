import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Eventos } from '../models/Eventos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:8080/wearecarnival/eventos/';

  criarEvento(evento: Eventos): Observable<Eventos> {
    return this.http.post<Eventos>(this.API + 'save', evento);
  }
  editarEvento(evento: Eventos): Observable<Eventos> {
    const url = `${this.API} + 'update'/${evento.id}`;
    return this.http.put<Eventos>(url, evento);
  }

  excluirEvento(id: number): Observable<Eventos> {
    const url = `${this.API} + 'delete'/${id}`;
    return this.http.delete<Eventos>(url);
  }

  buscarPorId(id: string): Observable<Eventos> {
    const url = this.API + 'find/byId/' + id;
    return this.http.get<Eventos>(url);
  }

  listarTudo(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.API + 'find/all');
  }


}
