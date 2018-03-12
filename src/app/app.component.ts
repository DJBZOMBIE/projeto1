import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UNIVAS';
  
  aluno = {
    nome : 'Daniel',
    cpf : '12345678910',
    telefone : '123456789',
    email : 'Danieltest@gmail.com',
    dataNascimento : new Date(),
    peso : 129.76
  };

}
