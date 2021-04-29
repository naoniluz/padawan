import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formTitle: string;
  public formDescription: string;
  public email: string;

  constructor() { }

  ngOnInit(): void {
    this.formTitle = "Pagina Form";
    this.formDescription= "Descrição depois de iniciar o componente";
  }

}
