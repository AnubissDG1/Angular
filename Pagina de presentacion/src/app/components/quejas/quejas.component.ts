import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.css']
})
export class QuejasComponent implements OnInit {

  formulario = this.formBuilder.group({
    name: '',
    email: '',
    asunto:'',
    descrpcion:'',
  });

  nombre:string = "";
  email:string = "";
  asunto:string= "";
  descripcion:string = "";


  status = false;

  constructor(private formBuilder: FormBuilder,) { 
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.status = true
    this.nombre = this.formulario.get('name')?.value
  }
}
