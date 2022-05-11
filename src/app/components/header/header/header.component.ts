import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  personas:IPersona[] =[];
  personaActual:number = 0;

  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {

    this.personaService.getPersonas().subscribe((personacallback)=>(
      this.personas=personacallback));
    console.log(this.personas)

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
