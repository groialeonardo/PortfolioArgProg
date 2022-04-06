import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ExperienciaService } from 'src/app/services/experiencia.service';
import { UIexperienciaService } from 'src/app/services/uiexperiencia.service';

import { Exp } from 'src/app/Interfaces/Exp';
import { EXPS } from 'src/app/mock-exps';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  //exps:Exp[] = EXPS;
  exps:Exp[] = [];
  subcription?:Subscription;
  showAddExp:boolean = false;

  constructor(private experienciaService:ExperienciaService , private UIexperienciaService:UIexperienciaService) { }

  ngOnInit(): void {

    this.experienciaService.getExps().subscribe((expscallback)=>(
      this.exps=expscallback
      ));

    // Se consume el observable de UIexperienciaService que indica si se hizo clic en AddExp.
    //Copia el valor en showAddExp para hacer el toggle. En el html se muestra o no el formulario dependiendo del valor de esta ultima
    this.subcription = this.UIexperienciaService.onToggle().subscribe((t)=>(this.showAddExp=t))

  }

  addExp(exp:Exp) {

    this.experienciaService.addExp(exp).subscribe((t)=>(
      this.exps.push(t)
    ))
  }

  deleteExp(exp:Exp) {
    this.experienciaService.deleteExps(exp).subscribe(()=>(
      this.exps = this.exps.filter(t => t.id !==exp.id ))
    );
  }

    //Metodo que se llama desde el header.component.html cuando se detecta el evento emitido por el componente Button al hacer click
  toggleAddExp() {

    //llama al servicio para que maneje este click
    this.UIexperienciaService.toggleAddExp()

  }

  //Obtiene un string desde el html para compararlo con la ruta actual. Si coincide con el string devuelve true.
  //Se usa para esconder el boton cuando se sale de task component.
  hasRoute(route:string){
    //return this.router.url === route;
    return true;
  }


}
