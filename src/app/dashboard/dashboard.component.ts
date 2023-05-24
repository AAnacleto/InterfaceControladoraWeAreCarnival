import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{


  dados = [
    {
      "titulo": "Total de Eventos Cadastrados",
      "valor": 80
    },
    {
      "titulo": "Total de Eventos em Olinda",
      "valor": 40
    },
    {
      "titulo": "Total de Eventos em Recife",
      "valor": 40
    }
  ]


  ngOnInit(): void {
  }

}
