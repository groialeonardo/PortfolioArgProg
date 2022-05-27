import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { IExp } from '../../../Interfaces/IExp';
import { Exp } from 'src/app/Model/Exp';
//import { EXPS } from '../../../mock-exps';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {

  imagenes: any[] = [];
  actual:boolean = false;

  @Input() exp:IExp = new  Exp();
  @Input() buttonText:string="";

  @Output() editEvent:EventEmitter<IExp> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<IExp> = new EventEmitter();

  @Input () showEditExp:boolean = false;
  @Input () showDelete:boolean = true;
  @Input () showEditBtn:boolean = true;

  //Sub?:Subscription

  constructor( private authService: AuthenticationService,
    private storageService:StorageService,) { }

  ngOnInit(): void {
    if(this.exp.fin==="la fecha"){ this.actual = true; }
  }
/*
  ngAfterViewChecked():void {
    if(this.exp.fin="la fecha"){ this.actual = true; }

  }
*/
  onDelete(exp:IExp) {
    this.deleteEvent.emit(exp);

  }

  async onSubmit(){

    if(this.exp.empresa.length === 0){
      alert("Por Favor complete el nombre de la empresa");
      return
    }

    if(this.exp.puesto.length === 0){
      alert("Por Favor complete el nombre del puesto");
      return
    }

    if(this.exp.descripcion.length === 0){
      alert("Por Favor complete la descripcion");
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

    if(this.actual){
      this.exp.fin="la fecha"
    }

    this.editEvent.emit(this.exp)

  }

  onToggleEditExp() {
    this.showEditExp = !this.showEditExp
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

  onActualChange(){
    this.actual = !this.actual;

    if(this.actual){
      this.exp.fin="la fecha"
    }else{
      this.exp.fin=""
    }
  }

}
