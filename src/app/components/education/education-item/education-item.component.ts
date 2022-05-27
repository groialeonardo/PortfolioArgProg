import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IEducation } from '../../../Interfaces/IEducation';
import { Education } from 'src/app/Model/Education';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})
export class EducationItemComponent implements OnInit {

  imagenes: any[] = [];
  actual:boolean = false;

  @Input() education:IEducation = new Education();
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<IEducation> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<IEducation> = new EventEmitter();

  @Input () showEditEducation:boolean = false;
  @Input () showDelete:boolean = true;
  @Input () showEditBtn:boolean =true;

  constructor( private authService: AuthenticationService,
    private storageService:StorageService) { }

  ngOnInit(): void {
    if(this.education.fin==="la fecha"){ this.actual = true; }
  }

  onDelete(educ:IEducation) {
    this.deleteEvent.emit(educ);

  }


  async onSubmit(){

    if(this.education.institucion.length === 0){
      alert("Por Favor complete el nombre de la empresa");
      return
    }

    if(this.education.titulo.length === 0){
      alert("Por Favor complete el nombre del puesto");
      return
    }

    if (this.imagenes[0] != null){
      try {
        await this.storageImagen(this.imagenes[0],"/portfolio/img/logos/educacion/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }
 //   console.log(this.exp)
    this.editEvent.emit(this.education)
  }


  onToggleEditEducation() {

    this.showEditEducation = !this.showEditEducation;

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
    this.education.pathlogo="";

  }

  async storageImagen(img:any,storeDirectory:string){
    try{
     await this.storageService.subirImagen(
        this.education.id+ "_" +this.education.titulo+ "_" + Date.now(),
        storeDirectory,img).then(urlImagen => {
         this.education.pathlogo=urlImagen?.toString() ?? "";
       });
    } catch (err) {
     console.log(err);
    }
  }

  onActualChange(){
    this.actual = !this.actual;

    if(this.actual){
      this.education.fin="la fecha"
    }else{
      this.education.fin=""
    }
  }

}
