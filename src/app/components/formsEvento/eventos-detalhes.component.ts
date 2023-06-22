import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Eventos } from 'src/app/shared/models/Eventos';
import { EventosService } from 'src/app/shared/servico/eventos.service';
import { EnderecoService } from 'src/app/shared/servico/endereco.service';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EnderecoApi } from 'src/app/shared/models/Endereco';

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
  data!: Date;
  dataString!: string;
  cep!: string;
  endereco!: EnderecoApi;

  @ViewChild('file', { static: false })
  inputArquivoRef!: ElementRef<HTMLInputElement>;

  diaSemana = [
    { id: 0, nome: 'Domingo' },
    { id: 1, nome: 'Segunda-feira' },
    { id: 2, nome: 'Terça-feira' },
    { id: 3, nome: 'Quarta-feira' },
    { id: 4, nome: 'Quinta-feira' },
    { id: 5, nome: 'Sexta-feira' },
    { id: 6, nome: 'Sabado' },
  ];

  polos: any[] = [];

  polosOlinda = [
    { id: 0, nome: 'Sem Polo', expandir: false },
    { id: 1,nome: 'Polo Carmo', expandir: false },
    { id: 2,nome: 'Polo Varadouro', expandir: false },
    { id: 3,nome: 'Polo Guadalupe', expandir: false },
    { id: 4,nome: 'Polo Alto da Sé', expandir: false },
    { id: 5,nome: 'Polo Rio Doce', expandir: false },
    { id: 6,nome: 'Polo Alafin Oyó', expandir: false },
    { id: 7,nome: 'Polo Xambá', expandir: false },
    { id: 8,nome: 'Polo Casa da Rabeca', expandir: false },
    { id: 9,nome: 'Infantis', expandir: false },
  ];

  polosRecife = [
    { id: 0,nome: 'Sem Polo', expandir: false },
    { id: 1,nome: 'Polo Marco Zero', expandir: false },
    { id: 2,nome: 'Polo Arsenal' , expandir: false},
    { id: 3,nome: 'Polo Samba na Moeda', expandir: false },
    { id: 4,nome: 'Polo Polo da Indepedencia', expandir: false },
    { id: 5,nome: 'Polo Patio de São Pedro', expandir: false },
    { id: 6,nome: 'Polo Novo Cais', expandir: false },
    { id: 7,nome: 'Polo Corredor Comunitário', expandir: false },
    { id: 8,nome: 'Polo Três Carneiros' , expandir: false},
    { id: 9,nome: 'Polo Morro da Conceição', expandir: false },
    { id: 10,nome: 'Polo Rua da Moeda', expandir: false },
    { id: 11,nome: 'Polo Patio do Terço', expandir: false },
    { id: 12,nome: 'Infantis' , expandir: false},
    { id: 13,nome: 'Mercado Boa Vista' , expandir: false},
  ];

  constructor(
    private router: Router,
    private routeActivated: ActivatedRoute,
    private service: EventosService,
    private storage: Storage,
    private enderecoService: EnderecoService
  ) {}


  ngOnInit() {
    this.parametroRota = this.routeActivated.snapshot.params['id'];

    if (this.parametroRota === 'new') {
      this.operacao = 'Cadastrar';
    }
    if (this.parametroRota != 'new') {
      this.operacao = 'Detalhar';
      this.buscarPorId(this.parametroRota);
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

  buscarPorId(id: string) {
    return this.service.buscarPorId(id).subscribe((data) => {
      this.evento = data as Eventos[][0];
      console.log(this.evento);
    });
  }

  getImageByName(imageName: string) {
    const imageRef = ref(this.storage, `images/${imageName}`);

    getDownloadURL(imageRef)
      .then((url) => {
        console.log('URL da foto:', url);
        this.evento.imagem = url;
        if (this.evento.imagem != '') {
          this.imgUrl = '';
        }
      })
      .catch((error) => {
        console.log('Erro ao obter a URL da foto:', error);
      });
  }

  formatarDataParaBrasileiro(data: Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear().toString();

    return `${dia}/${mes}/${ano}`;
  }

  pegarData() {
    this.data = new Date(this.dataString);
    this.evento.data = this.formatarDataParaBrasileiro(this.data);
    const day = this.data.getDay();
    const dayOfWeek: any[] = this.diaSemana.filter((d) => d.id === day);
    this.evento.diaSemana = dayOfWeek[0].nome;
  }

  preencherEndereco() {
    this.enderecoService.buscarEndereco(this.cep).subscribe((data) => {
      this.endereco = data as EnderecoApi;
      this.evento.endereco.nomeRua = this.endereco.logradouro;
      this.evento.endereco.bairro = this.endereco.bairro;
      this.evento.endereco.cidade = this.endereco.localidade;

      if(this.evento.endereco.cidade == 'Olinda'){
        this.polos = this.polosOlinda;
      } else {
        this.polos = this.polosRecife;
      }
    });
  }

  criarEvento() {
    // this.service.criarEvento(this.evento).subscribe(() => {
    //   this.router.navigate(['home']);
    //   console.log(this.evento);
    // });
    if(this.evento.nome === ""){
      
    }
    console.log(this.evento);
  }

  editarEvento() {
    this.service.editarEvento(this.evento).subscribe(() => {
      this.router.navigate(['home']);
      console.log(this.evento);
    });
  }

  excluirEvento() {
    if (this.evento.id) {
      this.service.excluirEvento(this.evento.id).subscribe(() => {
        this.router.navigate(['home']);
      });
    }
  }

  limparImagem() {
    this.evento.imagem = '';
    this.imgUrl = '';
    this.imagePath = '';
    this.inputArquivoRef.nativeElement.value = '';
  }

  limparTudo() {
    this.evento = new Eventos();
    this.imgUrl = '';
  }
}
