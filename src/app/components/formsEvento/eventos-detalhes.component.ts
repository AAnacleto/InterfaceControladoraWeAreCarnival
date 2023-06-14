import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Eventos } from 'src/app/shared/models/Eventos';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


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
  percentage = 0;
  carregando: boolean = true;
  fatimes = faTimes;

  @ViewChild('file', { static: false }) inputArquivoRef!: ElementRef<HTMLInputElement>;


  diaSemana = [
    {"id": 1 ,"nome": "Quinta-feira"},
    {"id": 2 ,"nome": "Sexta-feira"},
    {"id": 3 ,"nome": "Sábado de Carnaval"},
    {"id": 4 ,"nome": "Domingo de Carnaval"},
    {"id": 5 ,"nome": "Segunda de Carnaval"},
    {"id": 6 ,"nome": "Terça-feira Gorda"},
    {"id": 7 ,"nome": "Quarta-feira de Cinzas"}
  ]

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.parametroRota = this.routeActivated.snapshot.params['id'];
    this.operacao = 'Detalhar';
    if (this.parametroRota === 'new') {
      this.operacao = 'Cadastrar';
    }
    console.log(this.parametroRota);
  }

  voltarHome() {
    this.router.navigate(['/home']);
  }

  preview(files: any, event: any) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (!mimeType.match(/image\/*/)) {
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
      console.log(this.imgUrl);

      const file = files[0].name;

      const uploadOptions = {
        contentType: 'image/jpeg',
      };

      const imgRef = ref(this.storage, `images/${file}`);
      uploadBytes(imgRef, files[0], uploadOptions)
        .then(() => {
          console.log('Upload concluído com sucesso');
          this.getImageByName(file);
        })
        .catch((err) => {
          console.log('Erro ao fazer upload:', err);
        });
    };
  }

  getImageByName(imageName: string) {
    const imageRef = ref(this.storage, `images/${imageName}`);

    getDownloadURL(imageRef)
      .then((url) => {
        console.log('URL da foto:', url);
        this.evento.imagem = url;
        if(this.evento.imagem != ""){
          this.imgUrl = "";
        }
      })
      .catch((error) => {
        console.log('Erro ao obter a URL da foto:', error);
      });
  }

  limparImagem(){
    this.evento.imagem = "";
    this.imgUrl = '';
    this.imagePath = "";
    this.inputArquivoRef.nativeElement.value = '';
  }


  salvarEvento() {
    console.log(this.evento);
  }

  limparTudo() {
    this.evento = new Eventos();
    this.imgUrl = '';
  }
}
