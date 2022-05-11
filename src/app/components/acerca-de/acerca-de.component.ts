import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  personas:IPersona[] =[];
  personaActual:number = 0;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersonas().subscribe((personacallback)=>(
      this.personas=personacallback));
  }

  ngAfterViewInit(): void {
    this.refreshPersona();
  }

  refreshPersona(){
    this.personaActual = this.personas.findIndex(object => {
      return object.apellido === "Groia";
      });
      console.log( "Apellido : "+this.personaActual)
  }

}
