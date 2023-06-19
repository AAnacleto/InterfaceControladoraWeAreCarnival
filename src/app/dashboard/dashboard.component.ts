import { Component, OnInit } from '@angular/core';
import { Eventos } from '../shared/models/Eventos';
import { EventosService } from '../shared/servico/eventos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  quantidade: number = 0;
  dados = [
    {
      "titulo": "Total de Eventos Cadastrados",
      "valor": 0,
    },
    {
      "titulo": "Total de Eventos em Olinda",
      "valor": 0
    },
    {
      "titulo": "Total de Eventos em Recife",
      "valor": 10
    }
  ]

  listaEventos: Eventos[] = [];
  listaEventosOlinda: Eventos[] = [];
  listaEventosRecife: Eventos[] = [];

  constructor(private service: EventosService) {}

  ngOnInit(): void {
    this.listarTudo();
    this.listarCidadeOlinda();
    this.listarCidadeRecife();
  }

  listarTudo() {
    return this.service.listarTudo().subscribe(data => {
      this.listaEventos = (data as Eventos[]);
      console.log(this.listaEventos)
      this.quantidade = this.listaEventos.length;
      this.dados[0].valor = this.quantidade;
      console.log(this.quantidade);
    });
  }

  listarCidadeOlinda() {
    return this.service.listarCidade('Olinda').subscribe(data => {
      this.listaEventosOlinda = (data as Eventos[])
      this.quantidade = this.listaEventosOlinda.length
      this.dados[1].valor = this.quantidade
    })
  }

  listarCidadeRecife() {
    return this.service.listarCidade('Recife').subscribe(data => {
      this.listaEventosRecife = (data as Eventos[])
      this.quantidade = this.listaEventosRecife.length;
      this.dados[2].valor = this.quantidade
    })
  }
}
