import { Injectable } from '@angular/core';
import { CadastroUsuarioService } from './cadastro-usuario.service';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioExisteService {

  constructor(private service: CadastroUsuarioService) { }

  usuarioJaExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((email) =>
          this.service.verificaUsuarioExistente(email)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
        );
    };
  }
}
