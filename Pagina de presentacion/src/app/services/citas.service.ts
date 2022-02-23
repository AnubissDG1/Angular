import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cita } from '../interface/cita.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  citas:Cita[]=[] 
  

  constructor(private http:HttpClient) { 


  }
  getAll(){
    return this.citas;
  }
  addCita(cita:Cita){
    this.citas.push(cita);
    console.log(this.citas);
  }
  primer(){
    return this.citas[0];
  }
  ultimo(){
    return this.citas[this.citas.length-1];
  }
 
}
