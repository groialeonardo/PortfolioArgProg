import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { PersonaService } from 'src/app/services/persona.service';

import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  personas:IPersona[] =[];
  personaActual:number = 0;
  imagenes: any[] = [];

  constructor(private personaService:PersonaService, private storageService:StorageService) { }

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
      //console.log( "Apellido : "+this.personaActual)
  }

  addPersona(persona:IPersona) {

    if (this.imagenes[0] != null){
      this.storageImagen();
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

  deletePersona(persona:IPersona) {
    this.personaService.deletePersona(persona).subscribe(()=>(
      this.personas = this.personas.filter(t => t.id !==persona.id ))
    );
  }


  cargarImagen(event: any) {
    let archivos = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.imagenes[0]=reader.result;
    }
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






}
