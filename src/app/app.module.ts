import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventosDetalhesComponent } from './components/eventos-detalhes/eventos-detalhes.component';
import { FormsModule } from '@angular/forms';
import { EventosService } from './shared/servico/eventos.service';

@NgModule({
  declarations: [
    AppComponent,
    CadastroEventoComponent,
    LayoutComponent,
    HomeComponent,
    EventosDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
