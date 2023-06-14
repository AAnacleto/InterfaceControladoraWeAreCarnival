import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../shared/models/Usuario';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioService {

  constructor(private http: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(API + '/usuario/save', novoUsuario);
  }

  verificaUsuarioExistente(email: string) {
    return this.http.get(`${API}/usuario/find/email/${email}`)
  }
}
