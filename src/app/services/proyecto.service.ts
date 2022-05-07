///PRUEBA
import { CRUDHttpService } from './crud-http.service';
///

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IProject } from '../Interfaces/IProject';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ProyectoService {

  //apiUrl = "http://localhost:5000/projects";

  apiUrl = environment.apiUrlRoot + "/projects";

  constructor( /*private httpClient:HttpClient,*/ private crudHttpService:CRUDHttpService  ) { }

  getProjects() :  Observable< IProject []> {

    /*const exp = of (EXPS) //Para traer desde archivo monk-task
    return  exp;*/

    //return this.httpClient.get<Exp[]>(this.apiUrl);
    return this.crudHttpService.get(this.apiUrl)


  }


  deleteProject(proyect:IProject) : Observable<IProject> {

   /* const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.delete<Exp>(url)*/

    return this.crudHttpService.delete(proyect,this.apiUrl)


   }

  addProject(proyect:IProject) : Observable<IProject> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.post<Exp>(this.apiUrl,exp,httpOptions)*/

    return this.crudHttpService.post(proyect,this.apiUrl)

  }

  updateProject(proyect:IProject) : Observable<IProject> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.put<Exp>(url,exp,httpOptions)*/
    return this.crudHttpService.put(proyect,this.apiUrl)

  }


}


