import { IEducation } from "../Interfaces/IEducation";

export class Education implements IEducation {

  id?:number = 0;
  pathlogo:string ="";
  //pathlogo:string ="../assets/img/Logos/no-logo-yet.gif";
  institucion:string ="";
  inicio:string = "";
  fin:string = "";
  titulo:string="";
  descripcion:string="";

  constructor() {
    
  }

  

}
