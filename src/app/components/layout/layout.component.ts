import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faArrowAltCircleLeft,
  faArrowCircleLeft,
  faArrowCircleRight,
  faBars,
  faCashRegister,
  faList,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menu: boolean = true;
  submenu: boolean = false;

  faBars = faBars;
  faPlus = faPlus;
  faList = faList;
  faCrash = faCashRegister;
  faLogout = faArrowCircleRight;

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    console.log(this.submenu);
  }

  abrirMenu() {
    this.menu = !this.menu;
  }

  abrirSubmenu() {
    this.submenu = !this.submenu;
  }

  chamarRota(rota: any) {
    console.log(rota)
    var rotaAtual: any;

    if (rota === 1) {
      rotaAtual = 'home';
    } else if (rota === 2) {
      rotaAtual = 'eventos/detalhes/new';
    } else if (rota === 3) {
      rotaAtual = 'dashboard';
    }  else if (rota === 4) {
      rotaAtual = 'login';
    }

    console.log(rotaAtual);

    this.router
      .navigateByUrl(rotaAtual) // Chama a rota atual
      .then(() => {
        this.location.go(rotaAtual); // Atualiza a URL da página
        location.reload(); // Recarrega a página
      });
  }
}
