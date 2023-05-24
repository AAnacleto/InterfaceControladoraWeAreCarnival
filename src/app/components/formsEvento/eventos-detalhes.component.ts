import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Eventos } from 'src/app/shared/models/Eventos';

@Component({
  selector: 'app-eventos-detalhes',
  templateUrl: './eventos-detalhes.component.html',
  styleUrls: ['./eventos-detalhes.component.scss']
})
export class EventosDetalhesComponent implements OnInit {


  operacao: string = '';
  parametroRota: any;
  imagePath: any;
  imgUrl: any;
  evento: Eventos = new Eventos();


  constructor(private router: Router, private routeActivated: ActivatedRoute){

  }

  ngOnInit(){
    this.parametroRota = this.routeActivated.snapshot.params['id'];
    this.operacao = "Detalhar";
    if(this.parametroRota === 'new'){
      this.operacao = "Cadastrar";
    }
    console.log(this.parametroRota);

  }

  voltarHome(){
    this.router.navigate(['/home']);
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

 salvarEvento(){
  console.log(this.evento);
}

}
