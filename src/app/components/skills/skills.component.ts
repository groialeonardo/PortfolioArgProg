import { Component, OnInit } from '@angular/core';

import { Skill } from '../../Interfaces/Skill';
import { SKILL } from 'src/app/mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills:Skill[] = SKILL;
  // TO DO - IMPLEMENTAR SERVICIO DE LECTURA DE DB
  //skills:Skill[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
