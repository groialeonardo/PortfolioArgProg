import { IProject } from "../Interfaces/IProject";
import { ITecno } from "../Interfaces/ITecno";

export class Proyecto implements IProject {

  id?:number = 0;
  pathimg:string ="";
  //pathlogo:string ="../assets/img/Logos/no-logo-yet.gif";
  titulo:string ="";
  tecnologias:ITecno[]=[];
  inicio:string = "";
  fecha:string = "";
  descripcion:string="";

  constructor() {

    

   }

  

}
