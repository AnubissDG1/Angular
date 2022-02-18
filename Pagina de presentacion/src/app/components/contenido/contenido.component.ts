import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  Nombre : String = new String("Alberto Duran Gonzalez");
  edad: number = 22;
  constructor() { }

  ngOnInit(): void {
  }

}
