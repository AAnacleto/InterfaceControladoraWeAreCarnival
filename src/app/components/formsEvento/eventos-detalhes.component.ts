import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Eventos } from 'src/app/shared/models/Eventos';
import { EventosService } from 'src/app/shared/servico/eventos.service';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.component.html',
  styleUrls: ['./eventos-detalhes.component.scss'],
})
export class EventosDetalhesComponent implements OnInit {
  operacao: string = '';
  parametroRota: any;
  imagePath: any;
  imgUrl: any;
  evento: Eventos = new Eventos();

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private service: EventosService
  ) {}

  ngOnInit() {
    this.parametroRota = this.routeActivated.snapshot.params['id'];
    this.operacao = 'Detalhar';

    if (this.parametroRota !== 'new') {
      this.buscarPorId(this.parametroRota);
    }
    if (this.parametroRota === 'new') {
      this.operacao = 'Cadastrar';
    }
    console.log(this.parametroRota);
  }
  criarEvento() {
    this.service.criarEvento(this.evento).subscribe(() => {
      this.router.navigate(['home']);
      console.log(this.evento);
    });
  }
  // salvarEvento() {

  //   this.service.salvarEvento(this.evento);
  // }

  voltarHome() {
    this.router.navigate(['/home']);
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
      this.evento.imagem = this.removeSymbolsFromString(this.imgUrl);
    };
  }

  limparTudo() {
    this.evento = new Eventos();
    this.imgUrl = '';
  }

  removeSymbolsFromString(str: string): string {
    return str.replace(/[^\w\s]/gi, '');
  }

  buscarPorId(id: string) {
    return this.service.buscarPorId(id).subscribe((data) => {
      this.evento = data as Eventos[][0];
      console.log(this.evento);
    });
  }


}
