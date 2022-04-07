import { Component, OnInit } from '@angular/core';

import { SkillsService } from 'src/app/services/skills.service';

import { Skill } from '../../Interfaces/Skill';
import { SKILL } from 'src/app/mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  //skills:Skill[] = SKILL;
  // TO DO - IMPLEMENTAR SERVICIO DE LECTURA DE DB
  skills:Skill[] = [];

  constructor( private skillsSevice:SkillsService ) { }

  ngOnInit(): void {

    this.skillsSevice.getSkills().subscribe((skillscallback)=>(
      this.skills=skillscallback
      ));
    console.log(this.skills)

  }

}
