import { Component, OnInit } from '@angular/core';

import { ProyectoService } from 'src/app/services/proyecto.service';

import { IProject } from 'src/app/Interfaces/IProject';
import { PROJECTS } from 'src/app/mock-projects';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  //projects:IProject[]=PROJECTS;
  projects:IProject[]=[];

  constructor( private proyectoService:ProyectoService ) { }

  ngOnInit(): void {

    this.proyectoService.getProjects().subscribe((projectscallback)=>(
      this.projects=projectscallback
      ));
  }

  
  editProject(project:IProject) {

    //this.experienciaService.updateExp(exp).subscribe()
  }

  deleteProject(project:IProject) {
   /* this.experienciaService.deleteExps(exp).subscribe(()=>(
      this.exps = this.exps.filter(t => t.id !==exp.id ))
    );*/
  }
  
}
