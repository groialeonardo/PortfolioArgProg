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
         //Authorization: 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLGFkbWluQGdyb2lhbGVvbmFyZG8uY29tLmFyIiwiaXNzIjoiQ29kZUphdmEiLCJpYXQiOjE2NTM0NTE0NTEsImV4cCI6MTY1MzQ1NTA1MX0.JnhQkSaEbFUr1zEtY-xLegHj9rqsiyCOLdyNpDa7pmCg6ycTOlMxhI8Oljmp54ONlxG4_eicfPSCHwkXorHlWw"
        }
      })
    }
    console.log("Interceptor está corriendo " + JSON.stringify(currentUser))
    return next.handle(req)
  }

}

