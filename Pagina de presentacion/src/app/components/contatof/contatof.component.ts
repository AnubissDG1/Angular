import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/interface/cita.interface';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-contatof',
  templateUrl: './contatof.component.html',
  styleUrls: ['./contatof.component.css']
})
export class ContatofComponent{
  formulario = this.nuevoFormualario.group({
    nombre:'',
    email:'',
    telefono:'',
    evento:''
  });



citas: Cita[]=[];
constructor(private nuevoFormualario:FormBuilder){
}


CHILLSAVE(){
        let nuevaCita : Cita = {
            nombre :this.formulario.get('nombre')?.value,
            email:this.formulario.get('email')?.value,
            telefono:this.formulario.get('telefono')?.value, 
            evento:this.formulario.get('evento')?.value,
        }
    

        this.citas.push(nuevaCita);//PONER EN ARRAY

        console.log(this.citas);
        this.limpiarForm();
}


limpiarForm(){
        this.formulario.reset()
    }


}
