import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  retorno: string = " ";


  constructor(private http: HttpClient) { }

  buscarEndereco(cep: string){
    this.retorno = cep.trim();
    return this.http.get('https://viacep.com.br/ws/'+this.retorno+'/json/')
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          // Retornar resposta personalizada para o erro "Bad Request"
          return throwError('Erro: Requisição Inválida.');
        } else {
          // Retornar erro original para outros status de erro
          return throwError(error);
        }
      })
    );
  }

  buscarEndereco2(cep: string){
    this.retorno = cep.trim();
    return this.http.get('https://cdn.apicep.com/file/apicep/'+this.retorno+'.json/');
  }
}
