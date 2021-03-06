import { Component, OnInit } from '@angular/core';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { IProject } from 'src/app/Interfaces/IProject';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { ITecno } from 'src/app/Interfaces/ITecno';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  projects:IProject[]=[];
  allTecnologies:ITecno[]=[];
  showAddProject:boolean = false;

  constructor(
    private proyectoService:ProyectoService,
    private tecnologiaService:TecnologiaService ,
    private authService: AuthenticationService,
    private modalService: ModalService
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
  }

  deleteProject(project:IProject) {
      this.proyectoService.deleteProject(project).subscribe(()=>(
      this.projects = this.projects.filter(t => t.id !==project.id ))
    );
  }

  toggleAddProject(){

   this.showAddProject=!this.showAddProject;

  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}

