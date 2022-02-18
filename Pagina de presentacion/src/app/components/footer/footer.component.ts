import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  link : String = new String("https://www.instagram.com/albertphotography__/?hl=es-la");
  constructor() { }

  ngOnInit(): void {
  }

}
