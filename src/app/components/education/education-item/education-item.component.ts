/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { IEducation } from '../../../Interfaces/IEducation';
import { Education } from 'src/app/Model/Education';
//import { EXPS } from '../../../mock-exps';

// TO DO , revisar esta implementacion
//import { UIexperienciaService } from 'src/app/services/uiexperiencia.service';
//import { subscribeOn, Subscription} from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  @Input() education:IEducation = new Education();
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<IEducation> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<IEducation> = new EventEmitter();

  @Input () showEditEducation:boolean = false;
  @Input () showDelete:boolean = true;
  @Input () showEditBtn:boolean =true;


  //showEditExp:boolean=false;
  //Sub?:Subscription

  constructor(/* private uiExperienciaService:UIexperienciaService */ private authService: AuthenticationService) { } // HACER UI PAARA ESTE

  ngOnInit(): void {

    // TO DO , revisar esta implementacion
   // this.Sub = this.uiExperienciaService.onToggle().subscribe((t)=>(this.showEditExp=t)) //se cambio por toogle local
  }

  onDelete(educ:IEducation) {
    this.deleteEvent.emit(educ);

  }

  // TO DO en otro componente
  onSubmit(){

    if(this.education.institucion.length === 0){
      alert("Por Favor complete el nombre de la empresa");
      return
    }

    if(this.education.titulo.length === 0){
      alert("Por Favor complete el nombre del puesto");
      return
    }

 //   console.log(this.exp)

    this.editEvent.emit(this.education)


  }

  onToggleEditEducation() {

    this.showEditEducation = !this.showEditEducation;

  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }


}
