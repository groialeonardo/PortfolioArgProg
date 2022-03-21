import { Component, OnInit } from '@angular/core';

import { ExperienciaService } from 'src/app/services/experiencia.service';

import { Exp } from 'src/app/Exp';
import { EXPS } from 'src/app/mock-exps';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  //exps:Exp[] = EXPS;
  exps:Exp[] = [];

  constructor(private experienciaService:ExperienciaService) { }

  ngOnInit(): void {

    this.experienciaService.getExps().subscribe((expscallback)=>(
      this.exps=expscallback
      ));

  }

}
