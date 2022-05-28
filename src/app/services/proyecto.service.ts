import { CRUDHttpService } from './crud-http.service';
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

  apiUrl = environment.apiUrlRoot + "/projects";

  constructor( /*private httpClient:HttpClient,*/ private crudHttpService:CRUDHttpService  ) { }

  getProjects() :  Observable< IProject []> {

    return this.crudHttpService.get(this.apiUrl)

  }


  deleteProject(proyect:IProject) : Observable<IProject> {

    return this.crudHttpService.delete(proyect,this.apiUrl)

   }

  addProject(proyect:IProject) : Observable<IProject> {

    return this.crudHttpService.post(proyect,this.apiUrl)

  }

  updateProject(proyect:IProject) : Observable<IProject> {

    return this.crudHttpService.put(proyect,this.apiUrl)

  }


}


