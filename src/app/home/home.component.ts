import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { EventosService } from '../shared/servico/eventos.service';
import { Eventos } from '../shared/models/Eventos';
import { DataService } from '../shared/servico/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fatrash = faTrash;
  listaEventos: Eventos[] = [];
  paginaAtual: number = 1;
  haMaisEventos: boolean = true;
  filtro: string = '';
  termoPesquisa: string = '';

  items = [ {
    "id": 1,
    "name": "Varejo 360",
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
    "img": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fcarnaval2.jfif?alt=media&token=3a15f812-f5e2-491d-8f81-e4def3da97fb",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false
  },
  {
    "id": 2,
    "name": "A Cor Purpura",
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
    "img": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fcamarotes.png?alt=media&token=e01a14d3-b91b-4865-8069-2d0b27ba6a5e",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false
  },
  {
   "id": 3,
   "name": "A Arte do Estoicismo",
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
    "img": "./assets/imagens/3.jpg",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false
  },
  {
    "id": 4,
    "name": "Terra por elas Convida",
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
    "img": "./assets/imagens/4.jpg",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false

  },
  {
    "id": 5,
    "name": "Match Hall",
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
    "img": "./assets/imagens/5.png",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false

  },
  {
    "id": 6,
    "name": "Galo da Madrugada",
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
    "img": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fgalomadrugada.jpeg?alt=media&token=88c75215-e478-47a4-8b56-2fb145658465",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false
  },
  {
    "id": 7,
    "name": "Homem da Meia Noite",
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
    "img": "https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fhomemmeianoite.jpeg?alt=media&token=83117896-2660-40fb-8fa1-c71b20e8936a",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false
  },
  {
    "id": 8,
    "name": "Pitombeira",
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
    "img":"https://firebasestorage.googleapis.com/v0/b/wearecarnival-images.appspot.com/o/images%2Fmaracatunacao.png?alt=media&token=ebcdb2df-813a-4886-9be6-569cccb10805",
    "data": "2024-02-10",
    "horarioSaida": "00:00",
    "diaSemana": "Sábado",
    "favoritos": false
  }
  ]

  constructor(private router: Router, private service: EventosService, private dataService: DataService ) { }

  ngOnInit(): void{
    this.listarTudo();
    // this.listaEventos = this.items; //remover esse trecho
    this.dataService.getSearchData().subscribe(data => {
       this.termoPesquisa = data;

      if(this.termoPesquisa != ""){
        this.pesquisarEvento();
      } else if (this.termoPesquisa === ""){
        // this.listaEventos = this.items; //trocar por listar tudo
        this.listarTudo();
      }
    });
  }

  irParaDetalhes(id: string){
    console.log(id)
    this.router.navigate(['/eventos/detalhes/' + id]);
  }


  pesquisarEvento(){
    const lowerCaseSearchTerm = this.termoPesquisa.toLowerCase();
    this.listaEventos= this.listaEventos.filter(item => item.nome.toLowerCase().includes(lowerCaseSearchTerm));
  }

  listarTudo() {
    return this.service.listarTudo().subscribe(data => {
      this.listaEventos = (data as Eventos[]);
      console.log(this.listaEventos)
    });
  }

}
