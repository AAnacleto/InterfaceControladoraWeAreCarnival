import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { EventosService } from '../shared/servico/eventos.service';
import { Eventos } from '../shared/models/Eventos';


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

  constructor(private router: Router, private service: EventosService ) { }

  ngOnInit(): void{
    // this.service.listar(this.paginaAtual, this.filtro).subscribe(() => {
    //   this.listaEventos = this.listaEventos
    // })
    this.listarTudo();
  }

  irParaDetalhes(id: string){
    console.log(id)
    this.router.navigate(['/eventos/detalhes/' + id]);
  }

  // carregarMaisEventos() {
  //   this.service.listar(++this.paginaAtual, this.filtro)
  //   .subscribe(listaEventos => {
  //     this.listaEventos.push(...listaEventos);
  //     if(!listaEventos.length) {
  //       this.haMaisEventos = false
  //     }
  //   })
  // }

  // pesquisarEventos() {
  //   this.haMaisEventos = true;
  //   this.paginaAtual = 1;
  //   this.service.listar(this.paginaAtual, this.filtro)
  //   .subscribe(listaEventos => {
  //     this.listaEventos = listaEventos
  //   })
  // }

  listarTudo() {
    return this.service.listarTudo().subscribe(data => {
      this.listaEventos = (data as Eventos[]);
      console.log(this.listaEventos)
    });
  }

}
