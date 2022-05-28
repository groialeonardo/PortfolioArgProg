import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService  implements HttpInterceptor{

  constructor(private authService:AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser=this.authService.UsuarioAutenticado;
    if(currentUser && currentUser.accessToken) {
      console.log("Interceptor está corriendo " + `Bearer ${currentUser.accessToken}`)
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.accessToken}`
        }
      })
    }
    console.log("Interceptor está corriendo " + JSON.stringify(currentUser))
    return next.handle(req)
  }

}

