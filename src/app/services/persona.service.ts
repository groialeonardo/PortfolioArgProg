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

     return  this.crudHttpService.get(this.apiUrl);;

  }

  deletePersona(persona:IPersona) : Observable<IPersona> {

    return this.crudHttpService.delete(persona,this.apiUrl)

   }

  addPersona(persona:IPersona) : Observable<IPersona> {

    return this.crudHttpService.post(persona,this.apiUrl)

  }

  updatePersona(persona:IPersona) : Observable<IPersona> {

    return this.crudHttpService.put(persona,this.apiUrl)

  }


}
