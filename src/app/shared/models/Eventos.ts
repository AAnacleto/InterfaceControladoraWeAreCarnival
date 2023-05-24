import { Endereco } from './Endereco';
export class Eventos{
    id: string = "";
    nome : string = "";
    polo: string = "";
    endereco: Endereco = new Endereco();
    nomeLocal: string = "";
    imagem: string = "";
    data: string = "";
    horario: string = "";
    diaSemana: string = "";
    favoritos: boolean = false;
}
