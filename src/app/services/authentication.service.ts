/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
}*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username:string, password:string) {
    if (username === "admin" && password === "123456") {
      sessionStorage.setItem('username', username)
      sessionStorage.setItem('password', password)
      return true;
    } else {
      return false;
    }
  }

/*
authenticate(username:string, password:string) {
  console.log(username);
  console.log(password);
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.httpClient.get<User>('http://localhost:8080/employees/validateLogin', { headers }).pipe(
    map(
      userData => {
        sessionStorage.setItem('username', username);
        let authString = 'Basic ' + btoa(username + ':' + password);
        sessionStorage.setItem('basicauth', authString);
        return userData;
      }
    )

  );
}
*/

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
   // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
