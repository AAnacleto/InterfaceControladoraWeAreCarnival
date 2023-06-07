import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  const email = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (email.trim() + password.trim()) {
    return email !== password ? null : { senhaIgualUsuario: true };
  } else {
    return null;
  }
}
