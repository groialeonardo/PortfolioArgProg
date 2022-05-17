import { Component, OnInit } from '@angular/core';

import { SkillsService } from 'src/app/services/skills.service';

import { ISkill } from '../../Interfaces/ISkill';
//import { SKILL } from 'src/app/mock-skills';

import { AuthenticationService } from 'src/app/services/authentication.service';

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

  constructor( private skillsSevice:SkillsService, private authService: AuthenticationService ) { }

  ngOnInit(): void {

    this.skillsSevice.getSkills().subscribe((skillscallback)=>(
      this.skills=skillscallback
      ));
   // console.log(this.skills)

  }

  editSkill(skill:ISkill) {

    this.skillsSevice.updateSkill(skill).subscribe(()=>{      
      alert("Los datos se han guardado satisfactoriamente");       
    })
  }

  saveSkill(skill:ISkill) {

    this.skillsSevice.addSkill(skill).subscribe((t)=>{
      this.skills.push(t);
      alert("Se ha añadido una nueva Experiencia");
      this.showAddSkill = false;
      
    })
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

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

}
