/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor() { }
}
*/

///PRUEBA
import { CRUDHttpService } from './crud-http.service';
///

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IEducation } from '../Interfaces/IEducation';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class EducationService {

  apiUrl = "http://localhost:8080/educations";

  constructor( /*private httpClient:HttpClient,*/ private crudHttpService:CRUDHttpService  ) { }

  getEducations() :  Observable<IEducation[]> {

    /*const educations = of (EDUCATIONS) //Para traer desde archivo monk-task
    return  educations;*/
    //return this.httpClient.get<Exp[]>(this.apiUrl);
   
    return this.crudHttpService.get(this.apiUrl)
  }


  deleteEducation(educ:IEducation) : Observable<IEducation> {

   /* const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.delete<Exp>(url)*/

    return this.crudHttpService.delete(educ,this.apiUrl)
   }

  addEducation(educ:IEducation) : Observable<IEducation> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.post<Exp>(this.apiUrl,exp,httpOptions)*/

    return this.crudHttpService.post(educ,this.apiUrl)
  }

  updateEducation(educ:IEducation) : Observable<IEducation> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.put<Exp>(url,exp,httpOptions)*/

    return this.crudHttpService.put(educ,this.apiUrl)
  }


}

