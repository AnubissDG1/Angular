import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './components/app-routing/app-routing.modules';
import { FooterComponent } from './components/footer/footer.component';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ContatofComponent } from './components/contatof/contatof.component';
import { QuejasComponent } from './components/quejas/quejas.component';
import { ListaComponent } from './components/lista/lista.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContenidoComponent,
    HeaderComponent,
    HomeComponent,
    ContactoComponent,
    ContatofComponent,
    QuejasComponent,
    ListaComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
