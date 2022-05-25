import { Injectable} from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IUser } from '../Interfaces/IUser';
import { BehaviorSubject, map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUserSubject: BehaviorSubject<any>
  constructor(private httpClient:HttpClient) {
    console.log("El servicio de autenticación está corriendo")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
  }

  IniciarSesion(credenciales:any):Observable<any>{
    return this.httpClient.post(environment.apiUrlRoot +"/login", credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUserSubject.next(data)
    }))
  }

  get UsuarioAutenticado(){
    return this.currentUserSubject.value;
  }

  isUserLoggedIn() {

    let user = sessionStorage.getItem('currentUser')
      //console.log(!(user === null))
    return !(user === null)
      //return !(this.currentUserSubject.value === null);

     // return (this.UsuarioAutenticado.email && this.UsuarioAutenticado.acceessToken)
  }

  logOut() {
    sessionStorage.removeItem('currentUser')
    this.currentUserSubject.next(null);
  }



/*// Esto es para basic auth
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
    //console.log(!(user === null))
    return !(user === null)

  }

  logOut() {
    sessionStorage.removeItem('username')


  }
*/
}
