/*
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }
}
*/

import { CRUDHttpService } from './crud-http.service';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { ISkill } from '../Interfaces/ISkill';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  //apiUrl = "http://localhost:8080/skills";

  apiUrl = environment.apiUrlRoot + "/skills";

  constructor( private crudHttpService:CRUDHttpService  ) { }

  getSkills() :  Observable<ISkill[]> {

     return this.crudHttpService.get(this.apiUrl);

  }

  deleteSkill(skill:ISkill) : Observable<ISkill> {

    return this.crudHttpService.delete(skill,this.apiUrl)

   }

  addSkill(skill:ISkill) : Observable<ISkill> {

    return this.crudHttpService.post(skill,this.apiUrl)

  }

  updateSkill(skill:ISkill) : Observable<ISkill> {

    return this.crudHttpService.put(skill,this.apiUrl)

  }


}
