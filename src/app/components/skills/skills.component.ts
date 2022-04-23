import { Component, OnInit } from '@angular/core';

import { SkillsService } from 'src/app/services/skills.service';

import { ISkill } from '../../Interfaces/ISkill';
//import { SKILL } from 'src/app/mock-skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  //skills:Skill[] = SKILL;

  skills:ISkill[] = [];
  canEdit:boolean=false;
  showAddSkill:boolean=false;
  showEditSkill:boolean=false;

  constructor( private skillsSevice:SkillsService ) { }

  ngOnInit(): void {

    this.skillsSevice.getSkills().subscribe((skillscallback)=>(
      this.skills=skillscallback
      ));
   // console.log(this.skills)

  }

  editSkill(skill:ISkill) {

    this.skillsSevice.updateSkill(skill).subscribe()
  }

  saveSkill(skill:ISkill) {

    this.skillsSevice.addSkill(skill).subscribe((t)=>(
      this.skills.push(t)
    ))
  }

  deleteSkill(skill:ISkill) {


    this.skillsSevice.deleteSkill(skill).subscribe(()=>(
      this.skills = this.skills.filter(t => t.id !==skill.id ))
    );
  }

  onToggleAddskill() {

      this.showAddSkill = !this.showAddSkill

  }
  onToggleEditskill() {

    this.showEditSkill = !this.showEditSkill

  }

}
