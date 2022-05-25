/*//Borrar Todo

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';

//const username = sessionStorage.getItem('username')
//const password = sessionStorage.getItem('password')

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('password')) {
      req = req.clone({
        setHeaders: {
          //Authorization: "sessionStorage.getItem('basicauth')"
         'Authorization': 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password'))
        }
      })
    }

    return next.handle(req);

  }
}

*/
