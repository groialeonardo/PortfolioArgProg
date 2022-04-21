import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { Skill } from '../../../Interfaces/Skill';
import { SKILL } from 'src/app/mock-skills';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {
  
  @Input() skill:Skill = SKILL[0];

  // TO DO , revisar esta implementacion
  @Output() EditEvent:EventEmitter<Skill> = new EventEmitter();
  showEditSkill:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
    // TO DO en otro componente
    onSubmit(){

      if(this.skill.imageSrc.length === 0){  //TO DO realizar mejor esta parte
        alert("Por Favor elija una habilidad");
        return
      }
 
      
      console.log(this.skill) //TO DO borrar este log
  
      this.EditEvent.emit(this.skill)
  
  
    }

}
