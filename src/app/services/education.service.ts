import { CRUDHttpService } from './crud-http.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEducation } from '../Interfaces/IEducation';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class EducationService {

 apiUrl = environment.apiUrlRoot + "/educations";

  constructor( /*private httpClient:HttpClient,*/ private crudHttpService:CRUDHttpService  ) { }

  getEducations() :  Observable<IEducation[]> {

    return this.crudHttpService.get(this.apiUrl)
  }

  deleteEducation(educ:IEducation) : Observable<IEducation> {

    return this.crudHttpService.delete(educ,this.apiUrl)
   }

  addEducation(educ:IEducation) : Observable<IEducation> {

    return this.crudHttpService.post(educ,this.apiUrl)
  }

  updateEducation(educ:IEducation) : Observable<IEducation> {

    return this.crudHttpService.put(educ,this.apiUrl)
  }


}

