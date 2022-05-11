/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }
}
*/

import { CRUDHttpService } from './crud-http.service';

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

import { IPersona } from '../Interfaces/IPersona';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  apiUrl = environment.apiUrlRoot + "/personas";

  constructor( private crudHttpService:CRUDHttpService  ) { }

  getPersonas() :  Observable<IPersona[]> {

     const a = this.crudHttpService.get(this.apiUrl);

     console.log(a);

     return a;

  }

  deletePersona(skill:IPersona) : Observable<IPersona> {

    return this.crudHttpService.delete(skill,this.apiUrl)

   }

  addPersona(skill:IPersona) : Observable<IPersona> {

    return this.crudHttpService.post(skill,this.apiUrl)

  }

  updatePersona(skill:IPersona) : Observable<IPersona> {

    return this.crudHttpService.put(skill,this.apiUrl)

  }


}
