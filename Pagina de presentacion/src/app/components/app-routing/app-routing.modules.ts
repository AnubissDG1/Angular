import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { ContenidoComponent } from '../contenido/contenido.component';
import { HeaderComponent } from '../header/header.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ContatofComponent } from '../contatof/contatof.component';
import { QuejasComponent } from '../quejas/quejas.component';
import { ListaComponent } from '../lista/lista.component';

const routes : Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'footer',
    component:FooterComponent
  },
  {
    path:'contenido',
    component:ContenidoComponent
  },
  {
    path:'header',
    component:HeaderComponent
  },
  {
    path:'contacto',
    component:ContactoComponent
  },
  {
    path:'contactof',
    component:ContatofComponent
  }
  ,
  {
    path:'quejas',
    component:QuejasComponent
  }
  ,
  {
    path:'lista',
    component:ListaComponent
  }
  
]

@NgModule({  
  imports: [RouterModule.forRoot(routes)  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }