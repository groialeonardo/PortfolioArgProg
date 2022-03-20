import { Component, OnInit } from '@angular/core';
import { Exp } from 'src/app/Exp';
import { EXPS } from 'src/app/mock-exps';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  exps:Exp[] = EXPS;

  constructor() { }

  ngOnInit(): void {
  }

}
