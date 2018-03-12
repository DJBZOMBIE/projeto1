import { Component } from '@angular/core';
import {Aluno} from './aluno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UNIVAS';
  
  alunos : Aluno[];

  constructor() {
     this.alunos = [];

     for (let i = 0; i < 10; i++){
       let aluno = new Aluno();
       aluno.nome = 'Daniel ' + i;
       aluno.email = 'DanielTest@gmail.com';
       aluno.cpf = i + '234567891' + i;
       aluno.dataNascimento = new Date();
       aluno.peso = 34.64;
       aluno.telefone = '234561190';
       this.alunos.push(aluno);
     }
  }

}
