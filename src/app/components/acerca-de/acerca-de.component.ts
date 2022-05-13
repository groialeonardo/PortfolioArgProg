import { Component, OnInit, AfterViewInit, Input, Output,EventEmitter } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { Persona } from 'src/app/Model/Persona';
import { PersonaService } from 'src/app/services/persona.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
/*
  personas:IPersona[] =[];
  personaActual:number = 0;
*/
  imagenes: any[] = [];

  @Input() persona:IPersona = new Persona();
  @Input() loggedIn:boolean = false;
  @Output() onPersonaChangeEvent:EventEmitter<IPersona> = new EventEmitter()
  @Output() newPhotoimgEvent:EventEmitter<any> = new EventEmitter()

  @Input() showEdit:boolean=false; //aca necesito que sea un input


  constructor(/*private personaService:PersonaService, private storageService:StorageService*/) { }

  ngOnInit(): void {
   /* this.personaService.getPersonas().subscribe((personacallback)=>(
      this.personas=personacallback));*/
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


/*
  onToggleEditPerfil(){
    this.showEdit=!this.showEdit
  }

  ngAfterViewInit(): void {
    this.refreshPersona();
  }

  refreshPersona(){
    this.personaActual = this.personas.findIndex(object => {
      return object.mail === "groialeonardo@gmail.com";
      });
      //console.log( "Apellido : "+this.personaActual)
  }

 async addPersona(persona:IPersona) {

    if (this.imagenes[0] != null){
      try {
        await this.storageImagen();
      }
      catch (err) {
        console.log(err);
      }
    }

    this.personaService.addPersona(persona).subscribe((t)=>(
      this.personas.push(t)
    ));
  }

 async editPersona(persona:IPersona) {

    console.log(persona)
    if (this.imagenes[0] != null){
      console.log("pase por aca")
      try {
        await this.storageImagen();
      }
      catch (err) {
        console.log(err);
      }
    }
    console.log( persona)
     this.personaService.updatePersona(persona).subscribe()
  }

  //debe ser async y borrar la imagen de firebase¡?
  deletePersona(persona:IPersona) {
    this.personaService.deletePersona(persona).subscribe(()=>(
      this.personas = this.personas.filter(t => t.id !==persona.id ))
    );
  }

 async storageImagen(){
   try{
    await this.storageService.subirImagen(
       this.personas[this.personaActual].id+ "_" +this.personas[this.personaActual].apellido+ "_" + Date.now(),
      "/portfolio/img/profile/",
      this.imagenes[0]).then(urlImagen => {
        //console.log(urlImagen);
        this.personas[this.personaActual].image_perfil=urlImagen?.toString() ?? "";
      });
   } catch (err) {
    console.log(err);
   }

  }

*/




}
