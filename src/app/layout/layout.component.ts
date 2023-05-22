import { Component, OnInit } from '@angular/core';
import { faBars, faCashRegister, faList, faPlus } from '@fortawesome/free-solid-svg-icons';


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

  ngOnInit(){
    console.log(this.submenu);
  }

  abrirMenu(){
   this.menu = !this.menu;
  }

  abrirSubmenu(){
    this.submenu = !this.submenu;
  }

}
