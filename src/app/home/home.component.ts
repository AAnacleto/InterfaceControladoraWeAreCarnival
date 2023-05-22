import { Component, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fatrash = faTrash;

  constructor(private router: Router ) { }

  ngOnInit(){
  }

  irParaDetalhes(id: string){
    this.router.navigate(['/eventos/detalhes/${id}']);
  }

}
