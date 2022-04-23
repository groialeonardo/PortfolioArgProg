import { IExp } from "../Interfaces/IExp";

export class Exp implements IExp {

  id?:number = 0;
  pathlogo:string ="";
  empresa:string ="";
  inicio:string = "";
  fin:string = "";
  puesto:string="";
  descripcion:string="";

  constructor() { }

}
