import { ITecno } from "./ITecno";

export interface IProject {
  id?:number;
  pathimg:string;
  titulo:string;
  tecnologias:ITecno[];
  fecha:string;
  descripcion:string;
  projectLink:string;
}
