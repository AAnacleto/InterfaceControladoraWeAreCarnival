import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars, faCashRegister, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Location } from '@angular/common';



@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menu: boolean = true;
  submenu: boolean = false;

  faBars = faBars;
  faPlus = faPlus;
  faList= faList;
  faCrash= faCashRegister;

  constructor(private router: Router, private location: Location){}

  ngOnInit(){
    console.log(this.submenu);
  }

  abrirMenu(){
   this.menu = !this.menu;
  }

  abrirSubmenu(){
    this.submenu = !this.submenu;
  }

  chamarRota() {
    const rotaAtual = "/eventos/detalhes/new"; // Obtém a rota atual
    this.router.navigateByUrl(rotaAtual) // Chama a rota atual
      .then(() => {
        this.location.go(rotaAtual); // Atualiza a URL da página
        location.reload(); // Recarrega a página
      });

    }

}
