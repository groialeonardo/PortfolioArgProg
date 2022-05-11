import { IPersona } from "../Interfaces/IPersona";

export class Persona implements IPersona {


  id?:number = 0;
  nombres:string ="";
  apellido:string ="";
  fecha_nacimiento:string ="";
  nacionalidad: string ="";
  mail:string="";
  sobre_mi:string ="";
  ocupacion:string ="";
  image_background_header:string ="";
  image_perfil:string ="";
  linkedin_link:string="";
  github_link:string="";
  facebook_link:string="";
  instagram_link:string="";
  twitter_link:string="";

  constructor() {

  }



}
