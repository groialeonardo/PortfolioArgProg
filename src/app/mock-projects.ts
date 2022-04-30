import {IProject} from "./Interfaces/IProject"
import { TECNOS } from "./mock-tecno"
import { TECNOS2} from "./mock-tecno2"


export const PROJECTS: IProject[] = [
  {
    id:1,
    pathimg:"../../../../assets/img/Proyectos/argentinaprograma.PNG",
    titulo:"Portfolio Argentina Programa",
    tecnologias:TECNOS,
    fecha: "2021",
    descripcion:"SARASAAA",
    projectLink:"http://localhost:4200/"
  },
  {
    id:2,
    pathimg:"https://blog.hubbado.com/content/images/2020/01/projectmanager.png",
    titulo:"Paladini",
    tecnologias:TECNOS2,
    fecha: "1999",
    descripcion:"Sarasasasa2",
    projectLink:"http://localhost:4200/"
  },
  {
    id:3,
    pathimg:"../../../../assets/img/Proyectos/argentinaprograma.PNG",
    titulo:"Paladini2",
    tecnologias:TECNOS2,
    fecha: "2025",
    descripcion:"Sarasasasa3",
    projectLink:"http://localhost:4200/"
  }

]
