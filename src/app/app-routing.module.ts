import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { HomeComponent } from './home/home.component';
import { EventosDetalhesComponent } from './components/eventos-detalhes/eventos-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'eventos',
    children: [
      { path: 'cadastro', component: CadastroEventoComponent },
      { path: 'detalhes/:id', component: EventosDetalhesComponent },

    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
