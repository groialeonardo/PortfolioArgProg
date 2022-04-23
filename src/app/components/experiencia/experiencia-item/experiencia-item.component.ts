import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { IExp } from '../../../Interfaces/IExp';
import { EXPS } from '../../../mock-exps';

// TO DO , revisar esta implementacion
import { UIexperienciaService } from 'src/app/services/uiexperiencia.service';
import { subscribeOn, Subscription} from 'rxjs';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  @Input() exp:IExp = EXPS[0];

  @Output() onDeleteEvent:EventEmitter<IExp> = new EventEmitter();

  // TO DO , revisar esta implementacion
  @Output() EditEvent:EventEmitter<IExp> = new EventEmitter();


  showEditExp:boolean=false;
  Sub?:Subscription

  constructor( private uiExperienciaService:UIexperienciaService ) { }

  ngOnInit(): void {

    // TO DO , revisar esta implementacion
   // this.Sub = this.uiExperienciaService.onToggle().subscribe((t)=>(this.showEditExp=t)) //se cambio por toogle local
  }

  onDelete(exp:IExp) {
    this.onDeleteEvent.emit(exp);

  }

  // TO DO en otro componente
  onSubmit(){

    if(this.exp.empresa.length === 0){
      alert("Por Favor complete el nombre de la empresa");
      return
    }

    if(this.exp.puesto.length === 0){
      alert("Por Favor complete el nombre del puesto");
      return
    }

//    const {this.exp.pathlogo,empresa,inicio,fin,puesto,descripcion} = this;

 //   const newExp = {pathlogo,empresa,inicio,fin, puesto,descripcion};

 //   console.log(this.exp)

    this.EditEvent.emit(this.exp)


  }

  onToggleEditExp() {

    this.showEditExp = !this.showEditExp

  }


}
