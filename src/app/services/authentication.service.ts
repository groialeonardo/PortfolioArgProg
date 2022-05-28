import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
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
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('currentUser')
    this.currentUserSubject.next(null);
  }

}
