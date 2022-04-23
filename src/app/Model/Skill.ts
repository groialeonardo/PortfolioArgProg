import { ISkill } from "../Interfaces/ISkill";

export class Skill implements ISkill {

  id?:number = 0;
  percent:number = 10;
  radius:number = 80;
  imageSrc:string = "";
  imageHeight:number = 40;
  imageWidth:number = 80;

  constructor() { }

}
