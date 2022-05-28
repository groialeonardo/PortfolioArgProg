import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISkill } from '../../../Interfaces/ISkill';
import { Skill } from '../../../Model/Skill';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent implements OnInit {

  imagenes: any[] = [];

  @Input() skill:ISkill = new Skill();
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<ISkill> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<ISkill> = new EventEmitter();
  @Input () showEditSkill:boolean = false;
  @Input () showDelete:boolean = true;

  constructor(private authService: AuthenticationService,
    private storageService:StorageService) { }

  ngOnInit(): void {
    this.imagenes[0]=null;
  }

async onSubmit(){

    if((this.skill.imageSrc === "")&&(this.imagenes[0]===null)){
      alert("Por Favor elija una habilidad");
      return
    }

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
