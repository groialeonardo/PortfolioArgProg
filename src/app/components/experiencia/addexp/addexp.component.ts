import { Component, OnInit,EventEmitter, Output  } from '@angular/core';

import { Exp } from '../../../Interfaces/Exp';

import { UIexperienciaService } from 'src/app/services/uiexperiencia.service';

import { subscribeOn, Subscription} from 'rxjs';

@Component({
  selector: 'app-addexp',
  templateUrl: './addexp.component.html',
  styleUrls: ['./addexp.component.css']
})
export class AddexpComponent implements OnInit {

  @Output() addExpEvent:EventEmitter<Exp> = new EventEmitter()

  pathlogo:string ="";
  empresa:string ="";
  inicio:string = "";
  fin:string = "";
  puesto:string="";
  descripcion:string="";

  showAddExp:boolean = false;

  //Subcripcion para recibir el observable generado en el UIexperienciaService
  Sub?:Subscription

  constructor( private uiExperienciaService:UIexperienciaService) {

  }

  ngOnInit(): void {

    // Se consume el observable de UIexperienciaService que indica si se hizo clic en AddExp.
    //Copia el valor en showAddExp para hacer el toggle. En el html se muestra o no el formulario dependiendo del valor de esta ultima
    this.Sub = this.uiExperienciaService.onToggle().subscribe((t)=>(this.showAddExp=t))

  }

  onSubmit(){

    if(this.empresa.length === 0){
      alert("Por Favor complete el nombre de la empresa");
      return
    }

    if(this.puesto.length === 0){
      alert("Por Favor complete el nombre del puesto");
      return
    }

    const {pathlogo,empresa,inicio,fin,puesto,descripcion} = this;

    const newExp = {pathlogo,empresa,inicio,fin, puesto,descripcion};

    console.log(newExp)

    this.addExpEvent.emit(newExp)


  }
}
