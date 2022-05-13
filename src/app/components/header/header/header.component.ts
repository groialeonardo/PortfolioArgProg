import { Component, OnInit, AfterViewInit, Input, EventEmitter, Output } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { Persona } from 'src/app/Model/Persona';
//import { PersonaService } from 'src/app/services/persona.service';
//import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() persona:IPersona = new Persona();
  @Input() loggedIn:boolean = false;
  @Output() onSaveEvent:EventEmitter<IPersona> = new EventEmitter()
  @Output() newBannerimgEvent:EventEmitter<any[]> = new EventEmitter()
  @Output() OnToggleShowEdit:EventEmitter<boolean> =new EventEmitter()
/*
  personas:IPersona[] =[];
  personaActual:number = 0;
*/
  imagenes: any[] = [];

  showEdit:boolean=false;

  constructor(/*private personaService:PersonaService, private storageService:StorageService*/) { }

  ngOnInit(): void {
    //this too
    /*
    this.personaService.getPersonas().subscribe((personacallback)=>(
      this.personas=personacallback));
    console.log(this.personas)
*/
  }

  onToggleEditPerfil(){
    this.showEdit=!this.showEdit;
    this.OnToggleShowEdit.emit(this.showEdit);
  }

  addNewBanner(newBaneer:any){
    //this.imagenes[0]=newBaneer;
    //this.newBannerimgEvent.emit(this.imagenes[0]);
    console.log("pasando por banner en header")
    this.newBannerimgEvent.emit(newBaneer);

  }

  onSave(persona:IPersona){


    this.onSaveEvent.emit(persona);


  }
//from here
/*
  ngAfterViewInit(): void {
    this.refreshPersona();
  }

  refreshPersona(){
    this.personaActual = this.personas.findIndex(object => {
      return object.mail === "groialeonardo@gmail.com";
      });
      console.log( "Apellido : "+this.personaActual)
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

  async storageImagen(){
    try{
     await this.storageService.subirImagen(
        this.personas[this.personaActual].id+ "_" +this.personas[this.personaActual].apellido+ "_" + Date.now(),
       "/portfolio/img/banner/",
       this.imagenes[0]).then(urlImagen => {
         //console.log(urlImagen);
         this.personas[this.personaActual].image_background_header=urlImagen?.toString() ?? "";
       });
    } catch (err) {
     console.log(err);
    }
  }
*/
}
