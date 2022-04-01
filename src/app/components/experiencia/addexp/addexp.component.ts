import { Component, OnInit,EventEmitter, Output  } from '@angular/core';

import { Exp } from '../../../Interfaces/Exp';

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

  showAddExp:boolean = true;

  constructor() {

  }

  ngOnInit(): void {
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
