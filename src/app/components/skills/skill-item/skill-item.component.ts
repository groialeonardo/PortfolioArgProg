import { Component, OnInit, Input } from '@angular/core';


import { Skill } from '../../../Interfaces/Skill';
import { SKILL } from 'src/app/mock-skills';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  @Input() skill:Skill = SKILL[0];
  showEditSkill:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
