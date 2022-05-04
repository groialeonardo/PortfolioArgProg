import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';
import { ITecno } from 'src/app/Interfaces/ITecno';
//import { PROJECTS } from 'src/app/mock-projects';
import { IProject } from 'src/app/Interfaces/IProject';
import { Proyecto } from 'src/app/Model/Proyecto';
import { Tecnologia } from 'src/app/Model/Tecnologia';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  //projects:IProject[]=PROJECTS;
  //project:IProject =PROJECTS[0];
  //tecnos:ITecno[] = this.project.tecnologias;
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<IProject> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<IProject> = new EventEmitter();
  
  @Input () showEditProject:boolean = false;
  @Input () showDelete:boolean = true;
  showTecno:boolean= true;

  @Input() project:IProject =new Proyecto;

  //newTecno:ITecno = new Tecnologia;
  tecnologias = [
    { id: '1', name: 'order 1' },
    { id: '2', name: 'order 2' },
    { id: '3', name: 'order 3' },
    { id: '4', name: 'order 4' }
  ];

  form:FormGroup;
 


  constructor( private formBuilder: FormBuilder ) { 
    this.form = this.formBuilder.group({
      tecnologias: ['']
    });

    
  }

  ngOnInit(): void {
    this.tecnologias = this.getOrders();

  }

  //TO DO sacar
  getOrders() {
    return [
      { id: '1', name: 'order 1' },
      { id: '2', name: 'order 2' },
      { id: '3', name: 'order 3' },
      { id: '4', name: 'order 4' }
    ];
  }

  addTecno(){

  }

  onDelete(proy:IProject) {
    this.deleteEvent.emit(proy);

  }

  onToggleEditProject() {

    this.showEditProject = !this.showEditProject;

  }

  onDeleteTecno(tecno:ITecno) {
    //this.project.tecnologias.pop();

    this.project.tecnologias.forEach((value,index)=>{
      if(value.name==tecno.name) this.project.tecnologias.splice(index,1);
  });

  }

  onSubmit(){

    if(this.project.titulo.length === 0){
      alert("Por Favor complete el tìtulo del proyecto");
      return
    }


 //   console.log(this.exp)

    this.editEvent.emit(this.project)


  }



}
