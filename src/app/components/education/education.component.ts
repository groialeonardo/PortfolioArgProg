/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { EducationService } from 'src/app/services/education.service';
import { UIexperienciaService } from 'src/app/services/uiexperiencia.service';

import { IEducation } from 'src/app/Interfaces/IEducation';

import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  //exps:Exp[] = EXPS;
  educations:IEducation[] = [];
  //subcription?:Subscription;
  showAddEducation:boolean = false;

  constructor(private educationService:EducationService , private UIexperienciaService:UIexperienciaService, private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.educationService.getEducations().subscribe((educscallback)=>(
      this.educations=educscallback
      ));

    // Se consume el observable de UIexperienciaService que indica si se hizo clic en AddExp.
    //Copia el valor en showAddExp para hacer el toggle. En el html se muestra o no el formulario dependiendo del valor de esta ultima
   // this.subcription = this.UIexperienciaService.onToggle().subscribe((t)=>(this.showAddEducation=t))

  }

  addEducation(educ:IEducation) {

    this.educationService.addEducation(educ).subscribe((t)=>(
      this.educations.push(t)
    ))
  }

  editEducation(educ:IEducation) {

    this.educationService.updateEducation(educ).subscribe()
  }

  deleteEducation(educ:IEducation) {
    this.educationService.deleteEducation(educ).subscribe(()=>(
      this.educations = this.educations.filter(t => t.id !==educ.id ))
    );
  }

    //Metodo que se llama desde el header.component.html cuando se detecta el evento emitido por el componente Button al hacer click
  toggleAddEducation() {

    //llama al servicio para que maneje este click
    /*this.UIexperienciaService.toggleAddExp()*/

    this.showAddEducation = !this.showAddEducation

  }

  //Obtiene un string desde el html para compararlo con la ruta actual. Si coincide con el string devuelve true.
  //Se usa para esconder el boton cuando se sale de task component.
  hasRoute(route:string){
    //return this.router.url === route;
    return true;
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }


}
