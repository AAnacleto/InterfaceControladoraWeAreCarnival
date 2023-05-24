import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Eventos } from '../shared/models/Eventos';


@Component({
  selector: 'app-cadastro-evento',
  templateUrl: './cadastro-evento.component.html',
  styleUrls: ['./cadastro-evento.component.scss']
})
export class CadastroEventoComponent implements OnInit {

   evento: Eventos = new Eventos();
   operacao: string = "";
   imagePath: any;
   imgUrl: any;

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute
    ) { }

  ngOnInit(){}

  salvarEvento(){
    console.log(this.evento);
  }

  preview(files : any, event : any){
     if(files.length ===0){
      return;
     }

     let mimeType = files[0].type;
     if(mimeType.match(/image\/*/) == null){
       return;
     }

     let reader = new FileReader();
     this.imagePath = files;
     reader.readAsDataURL(files[0]);
     reader.onload = (_event) => {
      this.imgUrl = reader.result;
      this.evento.imagem = this.imgUrl;
     }
  }
}
