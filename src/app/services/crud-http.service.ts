import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers : new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CRUDHttpService {

  constructor(private httpClient:HttpClient ) { }

  get(apiUrl:string) :  Observable<any[]> {

    return this.httpClient.get<any[]>(apiUrl);

  }

  delete(toDelete:any, apiUrl:string) : Observable<any> {

    const url = `${apiUrl}/${toDelete.id}`;
    return this.httpClient.delete<any>(url)

   }

  post(toAdd:any, apiUrl:string) : Observable<any> {

    const url = `${apiUrl}/${toAdd.id}`;
    return this.httpClient.post<any>(apiUrl,toAdd,httpOptions)

  }

  put(toUpdate:any, apiUrl:string) : Observable<any> {

    const url = `${apiUrl}/${toUpdate.id}`;
    return this.httpClient.put<any>(url,toUpdate,httpOptions)
  }


}
