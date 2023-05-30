import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Eventos, Mensagem } from '../shared/models/Eventos';
import { EventosService } from '../shared/servico/eventos.service';

@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss'],
})
export class CadastroEventoComponent implements OnInit {

  evento: Eventos = new Eventos();
  operacao: string = '';
  imagePath: any;
  imgUrl: any;

  mensagem: Mensagem = new Mensagem();

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private service: EventosService,
  ) {}

  ngOnInit() {}

  salvarEvento() {
    console.log(this.evento);
    this.service.criarEvento(this.evento);//.subscribe((data) => {
      //console.log(data);
    //});
  }

  preview(files: any, event: any) {
    if (files.length === 0) {
      return;
    }

    let mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
      this.evento.imagem = this.imgUrl;
    };
  }
}
