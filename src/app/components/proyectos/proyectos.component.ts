import { Component, OnInit } from '@angular/core';

import { ProyectoService } from 'src/app/services/proyecto.service';
import { IProject } from 'src/app/Interfaces/IProject';
//import { PROJECTS } from 'src/app/mock-projects';

import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { ITecno } from 'src/app/Interfaces/ITecno';

import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  //projects:IProject[]=PROJECTS;
  projects:IProject[]=[];
  allTecnologies:ITecno[]=[];
  showAddProject:boolean = false;

  constructor(
    private proyectoService:ProyectoService,
    private tecnologiaService:TecnologiaService ,
    private authService: AuthenticationService
    ) {}

  ngOnInit(): void {

    this.proyectoService.getProjects().subscribe((projectscallback)=>(
      this.projects=projectscallback
      ));

    this.tecnologiaService.getTecnologies().subscribe((tecnocallback)=>(
      this.allTecnologies=tecnocallback
      ));

  }

  addProject(project:IProject) {

    this.proyectoService.addProject(project).subscribe((t)=>{
      this.projects.push(t)
      alert("Se ha añadido un nuevo Proyecto");
      this.showAddProject = false; 
  })
  }


  editProject(project:IProject) {

    this.proyectoService.updateProject(project).subscribe(()=>{      
      alert("Los datos se han guardado satisfactoriamente");       
    })
    //console.log(this.allTecnologies)
    //console.log(this.projects)
  }

  deleteProject(project:IProject) {
      this.proyectoService.deleteProject(project).subscribe(()=>(
      this.projects = this.projects.filter(t => t.id !==project.id ))
    );
  }

  toggleAddProject(){

   this.showAddProject=!this.showAddProject;

  }

  hasRoute(route:string){
    //return this.router.url === route;
    return true;
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }
}
