import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Exp } from '../Interfaces/Exp';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {

  apiUrl = "http://localhost:5000/exps";

  constructor( private httpClient:HttpClient ) { }

  getExps() :  Observable<Exp[]> {

    return this.httpClient.get<Exp[]>(this.apiUrl);

    /*const task = of (TASKS) //Para traer desde archivo monk-task
    return  task;*/
  }

  deleteExps(exp:Exp) : Observable<Exp> {

    const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.delete<Exp>(url)

   }

  addExp(exp:Exp) : Observable<Exp> {

    const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.post<Exp>(this.apiUrl,exp,httpOptions)

  }

  updateExp(exp:Exp) : Observable<Exp> {

    const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.put<Exp>(url,exp,httpOptions)


  }


}

