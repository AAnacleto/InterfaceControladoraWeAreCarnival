import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';
import { minusculoValidator } from './minusculo.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  novoUsuarioForm!: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private service: CadastroUsuarioService, private usuarioExisteService: UsuarioExisteService, private toast: ToastrService){}
  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(60)])],
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
    } else {
      this.toast.error('Por favor, preencha os dados corretamente.')
    }

  }
}
