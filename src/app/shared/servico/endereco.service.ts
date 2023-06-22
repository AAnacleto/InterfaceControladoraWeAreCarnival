import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  retorno: string = " ";


  constructor(private http: HttpClient) { }

  buscarEndereco(cep: string){
    this.retorno = cep.trim();
    return this.http.get('https://viacep.com.br/ws/'+this.retorno+'/json/');
  }
}
