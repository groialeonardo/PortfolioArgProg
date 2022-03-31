import { Component, OnInit,EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-addexp',
  templateUrl: './addexp.component.html',
  styleUrls: ['./addexp.component.css']
})
export class AddexpComponent implements OnInit {

  @Output() addTaskEvent:EventEmitter<Task> = new EventEmitter()

  nombreEmpresa:string ="";
  fechaInicio:string = "";
  fechaFin:string = "";
  nombrePuesto:string="";
  descripcion:string="";

  showAddExp:boolean = true;

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit(){

    if(this.nombreEmpresa.length === 0){
      alert("Please add a Task!");
      return
    }

    const {nombreEmpresa,fechaInicio,fechaFin,nombrePuesto,descripcion} = this;

    const newTask = {nombreEmpresa,fechaInicio,fechaFin,nombrePuesto,descripcion};

    console.log(newTask)

    //this.addTaskEvent.emit(newTask)


  }
}
