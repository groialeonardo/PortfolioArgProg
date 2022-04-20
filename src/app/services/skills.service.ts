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

import { Skill } from '../Interfaces/Skill';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  apiUrl = "http://localhost:8080/skills";

  constructor( private crudHttpService:CRUDHttpService  ) { }

  getSkills() :  Observable<Skill[]> {

     const a = this.crudHttpService.get(this.apiUrl);

     console.log(a);

     return a;

  }

  deleteSkill(skill:Skill) : Observable<Skill> {

    return this.crudHttpService.delete(skill,this.apiUrl)

   }

  addSkill(skill:Skill) : Observable<Skill> {

    return this.crudHttpService.post(skill,this.apiUrl)

  }

  updateSkill(skill:Skill) : Observable<Skill> {

    return this.crudHttpService.put(skill,this.apiUrl)

  }


}
