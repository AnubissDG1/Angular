import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/interface/cita.interface';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
import { CitasService } from 'src/app/services/citas.service';
import { User } from 'src/app/interface/user.modelo';

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


 primerElemento:Cita = {} as Cita;
 ultimo: Cita = {} as Cita;


citas: Cita[]=[];
constructor(private nuevoFormualario:FormBuilder, private CitaServices:CitasService){
}


CHILLSAVE(){
        let nuevaCita : Cita = {
            nombre :this.formulario.get('nombre')?.value,
            email:this.formulario.get('email')?.value,
            telefono:this.formulario.get('telefono')?.value, 
            evento:this.formulario.get('evento')?.value,
        }
        this.CitaServices.addCita(nuevaCita);

        this.primerElemento =  this.CitaServices.primer();
        this.ultimo = this.CitaServices.ultimo();
        this.citas.push(nuevaCita);//PONER EN ARRAY

        console.log(this.citas);
        this.limpiarForm();
}


limpiarForm(){
        this.formulario.reset()
    }


}
