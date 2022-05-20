import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISkill } from '../../../Interfaces/ISkill';
import { Skill } from '../../../Model/Skill';
//import { SKILL } from 'src/app/mock-skills';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  imagenes: any[] = [];
  //@Input() skill:Skill = SKILL[0];
  @Input() skill:ISkill = new Skill();
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<ISkill> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<ISkill> = new EventEmitter();
  @Input () showEditSkill:boolean = false;
  @Input () showDelete:boolean = true;

  constructor(private authService: AuthenticationService,
    private storageService:StorageService) { }

  ngOnInit(): void {
  }
  // TO DO en otro componente
async onSubmit(){

    if((this.skill.imageSrc.length === 0)&&(this.imagenes[0]===null)){  //TO DO realizar mejor esta parte
      alert("Por Favor elija una habilidad");
      return
    }
    // console.log(this.skill) //TO DO borrar este log
    if (this.imagenes[0] != null){
      try {
        await this.storageImagen(this.imagenes[0],"/portfolio/img/logos/skills/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }
    this.editEvent.emit(this.skill)
  }

  onDelete(){
    this.deleteEvent.emit(this.skill)
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

  onPathLogoChange(){
    this.imagenes[0]=null;
  }

  cargarImagen(event: any) {
    let archivos = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(archivos[0]);
    reader.onloadend = () => {
      this.imagenes[0]=reader.result;
      //this.newPhotoimgEvent.emit(reader.result)
    }
    this.skill.imageSrc="";
  }

  async storageImagen(img:any,storeDirectory:string){
    try{
     await this.storageService.subirImagen(
        this.skill.id+ "_" +/*this.skill.nombre+ "_" +*/ Date.now(),
        storeDirectory,img).then(urlImagen => {   
         this.skill.imageSrc=urlImagen?.toString() ?? "";
       });
    } catch (err) {
     console.log(err);
    }
  }

}
