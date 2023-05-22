import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3000/';

  buscarEventoPorId(id: any){
    return this.http.get(this.url + 'itens?id='+ id)
 }

 buscarTodosEventos(){
  return this.http.get(this.url + 'itens')
 }

}
