import { IUser } from "../Interfaces/IUser";

export class User implements IUser {

  id?:number = 0;
  username:string ="";
  password:string ="";
  status:string="";

  constructor() {

  }



}
