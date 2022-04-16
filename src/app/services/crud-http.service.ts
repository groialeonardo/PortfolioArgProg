import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
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

    var resp = this.httpClient.get<any[]>(apiUrl);

    console.log(resp)

    return resp

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
