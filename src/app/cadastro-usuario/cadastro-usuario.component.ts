import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { minusculoValidator } from './minusculo.validator';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  novoUsuarioForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private service: CadastroUsuarioService, private usuarioExisteService: UsuarioExisteService){}
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nome: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    },
    );
  }
  cadastrar() {
    console.log(this.novoUsuarioForm.value)
    if (this.novoUsuarioForm.valid) {
      this.service.cadastraNovoUsuario(this.novoUsuarioForm.value).subscribe(() =>{
        this.router.navigate([''])
      })
    }

  }
}
