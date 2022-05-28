import { CRUDHttpService } from './crud-http.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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

   apiUrl = environment.apiUrlRoot +"/tecnologies";

  constructor( /*private httpClient:HttpClient,*/ private crudHttpService:CRUDHttpService ) { }

  getTecnologies() :  Observable<ITecno[]> {

    return this.crudHttpService.get(this.apiUrl)

  }

  deleteTecnology(tecno:ITecno) : Observable<ITecno> {

     return this.crudHttpService.delete(tecno,this.apiUrl)

  }
  addTecnology(tecno:ITecno) : Observable<ITecno> {

    return this.crudHttpService.post(tecno,this.apiUrl)

  }

  updateTecnology(tecno:ITecno) : Observable<ITecno> {

    return this.crudHttpService.put(tecno,this.apiUrl)

  }

}
