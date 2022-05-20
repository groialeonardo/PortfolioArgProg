import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { IExp } from '../../../Interfaces/IExp';
import { Exp } from 'src/app/Model/Exp';
//import { EXPS } from '../../../mock-exps';

// TO DO , revisar esta implementacion
import { UIexperienciaService } from 'src/app/services/uiexperiencia.service';
//import { subscribeOn, Subscription} from 'rxjs';

import { AuthenticationService } from 'src/app/services/authentication.service';
//prueba img
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  imagenes: any[] = [];//prueba img

  @Input() exp:IExp = new  Exp();
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<IExp> = new EventEmitter();
// @Output() onDeleteEvent:EventEmitter<IExp> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<IExp> = new EventEmitter();

  @Input () showEditExp:boolean = false;
  @Input () showDelete:boolean = true;
  @Input () showEditBtn:boolean = true;


  //showEditExp:boolean=false;
  //Sub?:Subscription

  constructor( /*private uiExperienciaService:UIexperienciaService,*/ 
    private authService: AuthenticationService,
    private storageService:StorageService,) { }

  ngOnInit(): void {

    // TO DO , revisar esta implementacion
   // this.Sub = this.uiExperienciaService.onToggle().subscribe((t)=>(this.showEditExp=t)) //se cambio por toogle local
  }

  onDelete(exp:IExp) {
    this.deleteEvent.emit(exp);

  }

  // TO DO en otro componente
  async onSubmit(){

    if(this.exp.empresa.length === 0){
      alert("Por Favor complete el nombre de la empresa");
      return
    }

    if(this.exp.puesto.length === 0){
      alert("Por Favor complete el nombre del puesto");
      return
    }

    if (this.imagenes[0] != null){
      try {
        await this.storageImagen(this.imagenes[0],"/portfolio/img/logos/empresa/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }
    this.editEvent.emit(this.exp)

  }

  onToggleEditExp() {
    this.showEditExp = !this.showEditExp
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

  //prueba img

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
    this.exp.pathlogo="";

  }
  async storageImagen(img:any,storeDirectory:string){
    try{
     await this.storageService.subirImagen(
        this.exp.id+ "_" +this.exp.empresa+ "_" + Date.now(),
        storeDirectory,img).then(urlImagen => {   
         this.exp.pathlogo=urlImagen?.toString() ?? "";
       });
    } catch (err) {
     console.log(err);
    }
  }

}
