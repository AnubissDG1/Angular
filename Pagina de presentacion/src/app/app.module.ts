import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContenidoComponent,
    HeaderComponent,
    HomeComponent,
    ContactoComponent,
    ContatofComponent,
    QuejasComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
