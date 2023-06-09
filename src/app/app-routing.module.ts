import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { HomeComponent } from './home/home.component';
import { EventosDetalhesComponent } from './components/formsEvento/eventos-detalhes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'eventos',
    children: [
      { path: 'cadastro', component: CadastroEventoComponent },
      { path: 'detalhes/:id', component: EventosDetalhesComponent },

    ]
  },
  { path: 'dashboard', component: DashboardComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
