import { Component, OnInit, Input } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() personas:IPersona[] = [];
  personaActual:number = 0;

  constructor(private personaService:PersonaService,) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((personacallback)=>(
      this.personas=personacallback));
  }
  ngAfterViewInit(): void {
    this.refreshPersona();
  }

  refreshPersona(){
    this.personaActual = this.personas.findIndex(object => {
      return object.fecha_nacimiento === "10/11/1985";
      });
      console.log( "Usuario : "+ this.personas[this.personaActual].mail)
  }

}
