import { Endereco } from './Endereco';

export class Eventos{
    id: string = "";
    nome : string = "";
    polo: string = "";
    endereco: Endereco = new Endereco();
    nomeLocal: string = "";
    imagem: string = "";
    data: string = "";
    horarioSaida: string = "";
    diaSemana: string = "";
    favoritos: boolean = false;
}

export class Mensagem{
  status: string = '';
  mensagem: string = '';
}
