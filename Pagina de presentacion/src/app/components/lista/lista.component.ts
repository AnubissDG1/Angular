import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import { Cita } from 'src/app/interface/cita.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  primerElemento:Cita = {} as Cita;
 ultimo: Cita = {} as Cita;
citas:Cita[]=[];

  constructor(private citaService:CitasService) {

   }

  ngOnInit(): void {
    this.citas = this.citaService.getAll();
    console.log(this.citas);

    this.primerElemento =  this.citaService.primer();
    this.ultimo = this.citaService.ultimo();
    
  }

}
