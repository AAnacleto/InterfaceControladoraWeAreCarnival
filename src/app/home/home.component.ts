import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { EventosService } from '../shared/servico/eventos.service';
import { Eventos } from '../shared/models/Eventos';
import { DataService } from '../shared/servico/data.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fatrash = faTrash;
  // Usar o essa variavel quando tiver testando no banco
  // listaEventos: Eventos[] = [];
  listaEventos: any[] = [];
  paginaAtual: number = 1;
  haMaisEventos: boolean = true;
  filtro: string = '';
  termoPesquisa: string = '';

  items = [ {
    "id": 1,
    "nome": "Varejo 360",
    "polo": "Polo recife antigo",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Rua Recife Antigo",
        "numero": "97",
        "bairro": "São José",
        "cidade": "Recife",
        "pontoReferencia": "Próximo a accenture"
    },
    "nomeLocal": "Rua da hora",
    "imagem": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fcarnaval2.jfif?alt=media&token=3a15f812-f5e2-491d-8f81-e4def3da97fb",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "categoria": ""
  },
  {
    "id": 2,
    "nome": "A Cor Purpura",
    "polo": "Polo recife antigo",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Rua Recife Antigo",
        "numero": "97",
        "bairro": "São José",
        "cidade": "Recife",
        "pontoReferencia": "Próximo a accenture"
    },
    "nomeLocal": "Rua da hora",
    "imagem": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fcamarotes.png?alt=media&token=e01a14d3-b91b-4865-8069-2d0b27ba6a5e",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "categoria": "Camarote"
  },
  {
   "id": 3,
   "nome": "A Arte do Estoicismo",
   "polo": "Polo recife antigo",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Rua Recife Antigo",
        "numero": "97",
        "bairro": "São José",
        "cidade": "Recife",
        "pontoReferencia": "Próximo a accenture"
    },
    "nomeLocal": "Rua da hora",
    "imagem": "./assets/imagens/3.jpg",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "categoria": "Infantil" || "infantil"
  },
  {
    "id": 4,
    "nome": "Terra por elas Convida",
    "polo": "Polo recife antigo",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Rua Recife Antigo",
        "numero": "97",
        "bairro": "São José",
        "cidade": "Recife",
        "pontoReferencia": "Próximo a accenture"
    },
    "nomeLocal": "Rua da hora",
    "imagem": "./assets/imagens/4.jpg",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Segunda" || "segunda",
    "favoritos": false,
    "categoria": "Prévias" || "previas"

  },
  {
    "id": 5,
    "nome": "Match Hall",
    "polo": "Polo recife antigo",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Rua Recife Antigo",
        "numero": "97",
        "bairro": "São José",
        "cidade": "Recife",
        "pontoReferencia": "Próximo a accenture"
    },
    "nomeLocal": "Rua da hora",
    "imagem": "./assets/imagens/5.png",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "categoria": "Infantil"

  },
  {
    "id": 6,
    "nome": "Galo da Madrugada",
    "polo": "Polo recife antigo",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Rua Recife Antigo",
        "numero": "97",
        "bairro": "São José",
        "cidade": "Recife",
        "pontoReferencia": "Próximo a accenture"
    },
    "nomeLocal": "Rua da hora",
    "imagem": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fgalomadrugada.jpeg?alt=media&token=88c75215-e478-47a4-8b56-2fb145658465",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "categoria": "Tradicional"
  },
  {
    "id": 7,
    "nome": "Homem da Meia Noite",
    "polo": "Polo Bonsucesso",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Estrada do Bonsucesso",
        "numero": "97",
        "bairro": "Bonsucesso",
        "cidade": "Olinda",
        "pontoReferencia": "Em frente a igreja do Rosário"
    },
    "nomeLocal": "Sede do Homem da meia noite",
    "imagem": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fhomemmeianoite.jpeg?alt=media&token=83117896-2660-40fb-8fa1-c71b20e8936a",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "categoria": "Tradicional"
  },
  {
    "id": 8,
    "nome": "Pitombeira",
    "polo": "Centro",
    "endereco": {
        "id": "e71665e3-adff-4fd8-b40c-4ef030776376",
        "nomeRua": "Estrada do Bonsucesso",
        "numero": "97",
        "bairro": "Bonsucesso",
        "cidade": "Olinda",
        "pontoReferencia": "Em frente a igreja do Rosário"
    },
    "nomeLocal": "Sede da Pitombeira",
    "imagem":"https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fmaracatunacao.png?alt=media&token=ebcdb2df-813a-4886-9be6-569cccb10805",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false,
    "categoria": "Tradicional"
  }
  ]

  constructor(private router: Router,
              private service: EventosService,
              private dataService: DataService,
              private toast: ToastrService
             ) { }

  ngOnInit(): void{
    // this.listarTudo();

    //comentar esse trecho quando tiver usando o banco de dados
    this.listaEventos = this.items;

    this.dataService.getSearchData().subscribe(data => {
       this.termoPesquisa = data;
       console.log(this.termoPesquisa)
       this.pesquisarEvento();
      if(this.termoPesquisa != ""){
        this.pesquisarEvento();
      } else if (this.termoPesquisa === ""){
      //comentar esse trecho quando tiver usando o banco de dados
         this.listaEventos = this.items;

        // this.listarTudo();

      }
    });
  }


  irParaDetalhes(id: string){
    console.log(id)
    this.router.navigate(['/eventos/detalhes/' + id]);
  }


  pesquisarEvento(){
    const lowerCaseSearchTerm = this.termoPesquisa.toLowerCase();
    console.log(lowerCaseSearchTerm)
    this.listaEventos= this.items.filter(item => item.diaSemana.toLowerCase() === lowerCaseSearchTerm || item.nome.toLowerCase() === lowerCaseSearchTerm || item.categoria.toLowerCase() === lowerCaseSearchTerm);
    console.log(this.listaEventos)

    if(this.listaEventos.length === 0) {
      this.toast.error('Parece que não achamos o termo que você está procurando, digite novamente ...');

    }

  }

  listarTudo() {
    return this.service.listarTudo().subscribe(data => {
      this.listaEventos = (data as Eventos[]);
      console.log(this.listaEventos)
    });
  }

}
