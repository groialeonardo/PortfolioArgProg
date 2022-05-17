import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { PersonaService } from 'src/app/services/persona.service';
import { StorageService } from 'src/app/services/storage.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  personas:IPersona[] =[];
  personaActual:number = 0;
  imagenes: any[] = [];

  showEdit:boolean=false;

  constructor(private personaService:PersonaService, private storageService:StorageService,private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((personacallback)=>(
      this.personas=personacallback));
    //console.log(this.personas)
  }

  ngAfterViewInit(): void {
    this.refreshPersona();
  }

  refreshPersona(){
    this.personaActual = this.personas.findIndex(object => {
      return object.mail === "groialeonardo@gmail.com";
      });
      console.log( "Usuario : "+ this.personas[this.personaActual].mail)
  }

  ToggleShowEdit(showEdit:boolean){
    this.showEdit=showEdit;
  }

  addNewBanner(newBaneer:any){
   // console.log("pasando por banner en profile")
    this.imagenes[0]=newBaneer;
  }
  addNewProfilePhoto(newProfilePhoto:any){
    this.imagenes[1]=newProfilePhoto;
  }

  OnChangeFromAcercaDe(Changes:IPersona){
    this.personas[this.personaActual] =Changes;
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

  async addPersona(persona:IPersona) {

    if (this.imagenes[0] != null){
      try {
        await this.storageImagen(this.imagenes[0],"/portfolio/img/banner/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }
    if (this.imagenes[1] != null){
      try {
        await this.storageImagen(this.imagenes[1],"/portfolio/img/profile/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }

    //Por ahora en desuso, TO DO: implementar poder agregar nueva persona
    this.personaService.addPersona(persona).subscribe((t)=>{
      this.personas.push(t);
      alert("Se ha añadido una nueva Persona");
    }
      
    );
  }

  async editPersona(persChanges:IPersona) {

    //console.log(persChanges)

    if (this.imagenes[0] != null){
      try {
        await this.storageImagen(this.imagenes[0],"/portfolio/img/banner/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }
    if (this.imagenes[1] != null){
      try {
        await this.storageImagen(this.imagenes[1],"/portfolio/img/profile/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }

    this.personas[this.personaActual].linkedin_link=persChanges.linkedin_link;
    this.personas[this.personaActual].github_link=persChanges.github_link;
    this.personas[this.personaActual].facebook_link=persChanges.facebook_link;
    this.personas[this.personaActual].instagram_link=persChanges.instagram_link;
    this.personas[this.personaActual].twitter_link=persChanges.twitter_link;

    //console.log(this.personas[this.personaActual])
    this.personaService.updatePersona(this.personas[this.personaActual]).subscribe(()=>{      
      alert("Los datos se han guardado satisfactoriamente");       
    })
  }

  async storageImagen(img:any,storeDirectory:string){
    try{
     await this.storageService.subirImagen(
        this.personas[this.personaActual].id+ "_" +this.personas[this.personaActual].apellido+ "_" + Date.now(),
        storeDirectory,img).then(urlImagen => {
         //console.log(urlImagen);
         if(storeDirectory === "/portfolio/img/banner/")
         this.personas[this.personaActual].image_background_header=urlImagen?.toString() ?? "";
         if(storeDirectory === "/portfolio/img/profile/")
         this.personas[this.personaActual].image_perfil=urlImagen?.toString() ?? "";

       });
    } catch (err) {
     console.log(err);
    }
  }

}




