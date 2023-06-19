import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';
import { AuthServiceService } from '../shared/servico/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm!: FormGroup
  constructor(private builder: FormBuilder, private toastr: ToastrService, private service: AuthServiceService, private router: Router) {sessionStorage.clear();}
  result: any;
  ngOnInit(): void {
    this.loginForm = this.builder.group({
      email: this.builder.control('', Validators.required),
      senha: this.builder.control('', Validators.required)

    });
  }

  login() {
    if (this.loginForm.valid) {
      this.service.getEmail(this.loginForm.value.email).subscribe(item => {
        this.result = item;
        console.log(this.loginForm.value.email)

        if (this.result.senha === this.loginForm.value.senha) {
            this.sucesso();
            this.router.navigate(['/home']);
          } else {
            this.error();
          }
        })}
  }

  sucesso() {
    this.toastr.success('Login realizado com sucesso!', 'Sucesso');
  }

  error() {
    this.toastr.error('Email ou senha inválidos.')
  }
}
