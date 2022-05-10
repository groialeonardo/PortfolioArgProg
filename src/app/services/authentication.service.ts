import { Injectable, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../Interfaces/IUser';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

/*  ngOnInit(): void {

    // Se consume el observable de UIexperienciaService que indica si se hizo clic en AddExp.
    //Copia el valor en showAddExp para hacer el toggle. En el html se muestra o no el formulario dependiendo del valor de esta ultima
    this.Sub = this.authObs().subscribe((t)=>(this.prueba=t))

  }*/
/*
  authenticate(username:string, password:string) {
    if (username === "admin" && password === "123456") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('password', password)
      return true;
    } else {
      return false;
    }
  }
*/

  authenticate(username:string, password:string) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<IUser>(environment.apiUrlRoot +"/auth",{headers}).pipe(
    map(
      userData => {
      sessionStorage.setItem('username',username);
      sessionStorage.setItem('password',password);
      //let authString = 'Basic ' + btoa(username + ':' + password);
     // sessionStorage.setItem('basicauth', authString);
        return userData;
      }
    )

    );
  }

 isUserLoggedIn() {

  let user = sessionStorage.getItem('username')
   // console.log(!(user === null))
    return !(user === null)

  }

  logOut() {
    sessionStorage.removeItem('username')


  }
}
