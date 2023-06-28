import { Endereco } from './Endereco';

export class Eventos{
    id: string = "";
    nome : string = "";
    polo: string = "";
    endereco: Endereco = new Endereco();
    nomeLocal: string = "";
    imagem: string = "";
    data: string = "";
    categoria: string = "";
    horarioSaida: string = "";
    diaSemana: string = "";
    favoritos: boolean = false;
    diaInt: number = 0;
    descricao: string = "";
}

export class Mensagem{
  erro!: boolean;
}
