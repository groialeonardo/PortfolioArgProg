import { CRUDHttpService } from './crud-http.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IExp } from '../Interfaces/IExp';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json',
    'Authorization': 'Basic ' + btoa('admin:123456')
  })
}

@Injectable({
  providedIn: 'root'
})

export class ExperienciaService {

  //apiUrl = "http://localhost:8080/exps";
  apiUrl = environment.apiUrlRoot + "/exps";


  constructor( private httpClient:HttpClient, private crudHttpService:CRUDHttpService  ) { }

  getExps() :  Observable<IExp[]> {

    /*const exp = of (EXPS) //Para traer desde archivo monk-task
    return  exp;*/

    //return this.httpClient.get<Exp[]>(this.apiUrl);
    return this.crudHttpService.get(this.apiUrl)


  }


  deleteExps(exp:IExp) : Observable<IExp> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.delete<IExp>(url,httpOptions)*/

    return this.crudHttpService.delete(exp,this.apiUrl)


   }

  addExp(exp:IExp) : Observable<IExp> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.post<Exp>(this.apiUrl,exp,httpOptions)*/

    return this.crudHttpService.post(exp,this.apiUrl)

  }

  updateExp(exp:IExp) : Observable<IExp> {

    /*const url = `${this.apiUrl}/${exp.id}`;
    return this.httpClient.put<Exp>(url,exp,httpOptions)*/
    return this.crudHttpService.put(exp,this.apiUrl)

  }


}

