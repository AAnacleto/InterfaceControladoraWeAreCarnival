import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Eventos } from '../models/Eventos';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class EventosService {
  constructor(private http: HttpClient) {}


  criarEvento(evento: Eventos): Observable<Eventos> {
    return this.http.post<Eventos>(API + '/eventos/save', evento);
  }
  editarEvento(evento: Eventos): Observable<Eventos> {
    const url = API + '/eventos/update/' + evento.id;
    return this.http.put<Eventos>(url, evento);
  }

  excluirEvento(id: string): Observable<Eventos> {
    const url = API + '/eventos/delete/' + id;
    return this.http.delete<Eventos>(url);
  }

  buscarPorId(id: string): Observable<Eventos> {
    const url = API + '/eventos/find/byId/' + id;
    return this.http.get<Eventos>(url);
  }

  pesquisarEvento(nome: string) : Observable<any> {
    return this.http.get<Eventos>(`${API}/eventos/find/${nome}`);
  }

  listarTudo(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(API + '/eventos/find/all');
  }

  listar(pagina: number, filtro: string): Observable<Eventos[]> {
    const itensPorPagina = 6;

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

      if(filtro.trim().length > 2) {
        params = params.set('q', filtro);
      }

    return this.http.get<Eventos[]>(API, { params });
  }


}
