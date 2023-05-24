import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Eventos } from '../models/Eventos';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8080/wearecarnival/eventos/';

 buscarEventoPorId(id: any){
    return this.http.get(this.url + 'find/byId'+ id)
 }

 buscarTodosEventos(){
  return this.http.get(this.url + 'find/all');
 }

 salvarEvento(evento: Eventos){
  return this.http.post(this.url + 'save', evento);
 }

 editarEvento(evento: Eventos){
  return this.http.put(this.url + 'update', evento);

 }

 excluirEvento(id: any){
  return this.http.delete(this.url + 'delete/' + id);

 }

}
