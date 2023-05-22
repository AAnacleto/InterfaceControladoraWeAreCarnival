import { Component, OnInit } from '@angular/core';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.component.html',
  styleUrls: ['./eventos-detalhes.component.scss']
})
export class EventosDetalhesComponent implements OnInit {

  fapen = faPenSquare;
  trash = faTrash;
  operacao: string = '';

  ngOnInit(){
    this.operacao = "Detalhar";

  }

}
