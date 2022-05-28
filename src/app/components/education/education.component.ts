import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { IEducation } from 'src/app/Interfaces/IEducation';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educations:IEducation[] = [];
  showAddEducation:boolean = false;


  constructor(private educationService:EducationService,
    private authService: AuthenticationService,
    private modalService: ModalService) { }

  ngOnInit(): void {

    this.educationService.getEducations().subscribe((educscallback)=>(
      this.educations=educscallback
      ));

  }

  addEducation(educ:IEducation) {

    this.educationService.addEducation(educ).subscribe((t)=>{
      this.educations.push(t)
      alert("Se ha añadido una nueva Educación");
      this.showAddEducation = false;
  })
  }

  editEducation(educ:IEducation) {

    this.educationService.updateEducation(educ).subscribe(()=>{
      alert("Los datos se han guardado satisfactoriamente");
    })
  }

  deleteEducation(educ:IEducation) {
    this.educationService.deleteEducation(educ).subscribe(()=>(
      this.educations = this.educations.filter(t => t.id !==educ.id ))
    );
  }

  toggleAddEducation() {

    this.showAddEducation = !this.showAddEducation

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
