import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpErrorResponse} from '@angular/common/http';
import { catchError, Observable, throwError,retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),catchError((error: HttpErrorResponse) => {
          let errorMsg = 'Se ha Producido un Error en la carga de datos \nVerifique los datos ingresados o comuniquese con el administrador del sistema.' ;
          if (error.error instanceof ErrorEvent){
            //Error del lado del cliente
            errorMsg = errorMsg + `\nError: ${error.error.message}`;
          }else {
            //Error del lado del server
            errorMsg = errorMsg + `\nError Code: ${error.status}\nMessage: ${error.message}`;

            if(`${error.status}`==="401" || `${error.status}`==="403"){
              alert("Ha habido un problema con sus credenciales.\nVuelva a intentar iniciar sesion con credeciales válidas")
            }

          }

          window.alert(errorMsg);
          return throwError(errorMsg)

        })
      )

  }
}
