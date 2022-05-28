import { Component, OnInit, AfterViewInit, Input, Output,EventEmitter } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  imagenes: any[] = [];

  @Input() persona:IPersona = new Persona();
  @Input() loggedIn:boolean = false;
  @Input() showEdit:boolean=false;
  @Output() onPersonaChangeEvent:EventEmitter<IPersona> = new EventEmitter()
  @Output() newPhotoimgEvent:EventEmitter<any> = new EventEmitter()




  constructor() { }

  ngOnInit(): void {

  }

  cargarImagen(event: any) {
    let archivos = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.imagenes[0]=reader.result;
      this.newPhotoimgEvent.emit(reader.result)
    }
  }

  OnPersonaChange(){
    this.onPersonaChangeEvent.emit(this.persona);
  }

}
