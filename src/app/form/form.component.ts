import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public formTitle: string;
  public formDescription: string;
  public email: string;
  public emailsLocal = [];
  // public emails = []
  

  constructor(private emailService: EmailService) {
    this.emailsLocal = emailService.emails;
  }

  ngOnInit(): void {
    this.formTitle = "Pagina Form";
    this.formDescription= "Descrição depois de iniciar o componente";
  }
  public adicionarEmail() {
    if (this.email) {
      this.emailService.emails.push(this.email + '@flex.com');
      this.email='';
    }
    
}
}
