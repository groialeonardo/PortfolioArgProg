///PRUEBA
import { CRUDHttpService } from './crud-http.service';
///

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

  constructor( /*private httpClient:HttpClient,*/ private crudHttpService:CRUDHttpService  ) { }

  getExps() :  Observable<Exp[]> {

    /*const exp = of (EXPS) //Para traer desde archivo monk-task
    return  exp;*/

    //return this.httpClient.get<Exp[]>(this.apiUrl);
    return this.crudHttpService.get(this.apiUrl)


  }


  deleteExps(exp:Exp) : Observable<Exp> {

   /* const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.delete<Exp>(url)*/

    return this.crudHttpService.delete(exp,this.apiUrl)


   }

  addExp(exp:Exp) : Observable<Exp> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.post<Exp>(this.apiUrl,exp,httpOptions)*/

    return this.crudHttpService.post(exp,this.apiUrl)

  }

  updateExp(exp:Exp) : Observable<Exp> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.put<Exp>(url,exp,httpOptions)*/
    return this.crudHttpService.put(exp,this.apiUrl)

  }


}

