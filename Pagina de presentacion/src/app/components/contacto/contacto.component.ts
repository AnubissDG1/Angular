import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  
  formulario = this.formBuilder.group({
    name: '',
    apellido: '',
    email:'',
    asunto:'',
    gender:'',
  });

  nombre:string = "";
  apellido:string = "";
  email:string = "";
  asunto:string= "";
  gender:string = "";


  status = false;

  constructor(private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.status = true
    this.nombre = this.formulario.get('name')?.value
    this.asunto = this.formulario.get('asunto')?.value
    this.apellido = this.formulario.get('apellido')?.value
    this.email = this.formulario.get('email')?.value
    this.gender = this.formulario.get('gender')?.value
  }

}
