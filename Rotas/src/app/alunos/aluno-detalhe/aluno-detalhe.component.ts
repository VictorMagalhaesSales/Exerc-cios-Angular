import { AlunosService } from './../alunos.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  inscricao: Subscription;

  constructor(private alunoService: AlunosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunoService.getAluno(id);
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}