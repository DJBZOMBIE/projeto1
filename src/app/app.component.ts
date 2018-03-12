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
    cpf : '111.111.111-11',
    telefone : '11111-1111',
    email : 'Danieltest@gmail.com',
    dataNascimento : '21/04/1993'
  };

}
