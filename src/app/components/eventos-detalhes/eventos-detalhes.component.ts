import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.component.html',
  styleUrls: ['./eventos-detalhes.component.scss']
})
export class EventosDetalhesComponent implements OnInit {


  operacao: string = '';

  constructor(private router: Router){

  }

  ngOnInit(){
    this.operacao = "Detalhar";

  }

  voltarHome(){
    this.router.navigate(['/home']);
  }



}
