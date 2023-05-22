import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss']
})
export class CadastroEventoComponent implements OnInit {

  operacao: string = '';
  id: string = '';

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute
    ) { }

  ngOnInit(){
  //   this.id = this.routeActivated.snapshot.params['id'];
  //   console.log(this.id)

  //   if (this.id === 'novo'){
  //     this.operacao = 'Cadastrar';
  //     console.log(this.operacao)

  //   }

  //   if(this.id != 'novo'){
  //     this.operacao = 'Detalhar';
  //     console.log(this.operacao)
  //   }

  }

}
