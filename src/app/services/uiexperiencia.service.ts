/* import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIexperienciaService {

  constructor() { }
}
*/

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Exp } from '../Interfaces/Exp';

@Injectable({
  providedIn: 'root'
})
export class UIexperienciaService {

  private addExpflag:boolean = false;
  toggleAddExpSubject= new Subject<any>();



  constructor() { }

  //este metodo es el que se llama desde el header para cambiar el valor
  toggleAddExp() {

    console.log("toggleAddExp desde service")
    this.addExpflag = !this.addExpflag
    this.toggleAddExpSubject.next(this.addExpflag)

  }

  //este metodo es el observable que van a mirar los distintos componentes para hacerse del valor del Subject
  onToggle():Observable<any> {

    return this.toggleAddExpSubject.asObservable();
  }


}
