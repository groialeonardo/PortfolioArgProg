import { Component, OnInit, Input } from '@angular/core';
import { ITecno } from 'src/app/Interfaces/ITecno';
//import { PROJECTS } from 'src/app/mock-projects';
import { IProject } from 'src/app/Interfaces/IProject';
import { Proyecto } from 'src/app/Model/Proyecto';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  //projects:IProject[]=PROJECTS;
  //project:IProject =PROJECTS[0];
  //tecnos:ITecno[] = this.project.tecnologias;

  @Input() project:IProject =new Proyecto;


  constructor() { }

  ngOnInit(): void {

  }

}
