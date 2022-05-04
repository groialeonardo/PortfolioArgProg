///PRUEBA
import { CRUDHttpService } from './crud-http.service';
///
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ITecno } from '../Interfaces/ITecno';

const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  //apiUrl = "http://localhost:5000/tecnologies";
  apiUrl = "http://localhost:8080/tecnologies" 

  constructor( /*private httpClient:HttpClient,*/ private crudHttpService:CRUDHttpService ) { }

  getTecnologies() :  Observable<ITecno[]> {

    /*const exp = of (EXPS) //Para traer desde archivo monk-task
    return  exp;*/

    //return this.httpClient.get<Exp[]>(this.apiUrl);
    return this.crudHttpService.get(this.apiUrl)

  }

  deleteTecnology(tecno:ITecno) : Observable<ITecno> {

    /* const url = `${this.apiUrl}/${exp.id}`;
     return this.httpClient.delete<Exp>(url)*/
 
     return this.crudHttpService.delete(tecno,this.apiUrl)
  
  }
  addTecnology(tecno:ITecno) : Observable<ITecno> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.post<Exp>(this.apiUrl,exp,httpOptions)*/

    return this.crudHttpService.post(tecno,this.apiUrl)

  }

  updateTecnology(tecno:ITecno) : Observable<ITecno> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.put<Exp>(url,exp,httpOptions)*/
    return this.crudHttpService.put(tecno,this.apiUrl)

  }

}
