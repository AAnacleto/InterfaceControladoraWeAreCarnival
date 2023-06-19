import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroEventoComponent } from './cadastro-evento/cadastro-evento.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EventosDetalhesComponent } from './components/formsEvento/eventos-detalhes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventosService } from './shared/servico/eventos.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { provideFirebaseApp, initializeApp  } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBPOzwAEBRW8oGCK1eZcXJdhTwNj_3RmhQ",
  authDomain: "wearecarnival-images.firebaseapp.com",
  projectId: "wearecarnival-images",
  storageBucket: "wearecarnival-images.appspot.com",
  messagingSenderId: "375357255644",
  appId: "1:375357255644:web:ac223fa5b288c167e3e919"
};

@NgModule({
  declarations: [
    AppComponent,
    CadastroEventoComponent,
    LayoutComponent,
    HomeComponent,
    EventosDetalhesComponent,
    LoginComponent,
    DashboardComponent,
    CadastroUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ToastrModule.forRoot({
      positionClass: "toast-top-center",
      preventDuplicates: true,
      timeOut: 3000
    }),
    BrowserAnimationsModule

    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFirestoreModule
  ],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
