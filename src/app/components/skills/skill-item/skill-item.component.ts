import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


import { ISkill } from '../../../Interfaces/ISkill';
import { Skill } from '../../../Model/Skill';
//import { SKILL } from 'src/app/mock-skills';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  //@Input() skill:Skill = SKILL[0];
  @Input() skill:ISkill = new Skill();
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<ISkill> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<ISkill> = new EventEmitter();
  @Input () showEditSkill:boolean = false;
  @Input () showDelete:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
    // TO DO en otro componente
    onSubmit(){

      if(this.skill.imageSrc.length === 0){  //TO DO realizar mejor esta parte
        alert("Por Favor elija una habilidad");
        return
      }
     // console.log(this.skill) //TO DO borrar este log
      this.editEvent.emit(this.skill)
    }

    onDelete(){
      this.deleteEvent.emit(this.skill)
    }

}
