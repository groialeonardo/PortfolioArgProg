import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ITecno } from 'src/app/Interfaces/ITecno';
import { IProject } from 'src/app/Interfaces/IProject';
import { Proyecto } from 'src/app/Model/Proyecto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {

  @Input() buttonText:string="";
  @Input () showEditProject:boolean = false;
  @Input () showDelete:boolean = true;
  @Input () showEditBtn:boolean = true;
  @Input() project:IProject =new Proyecto;
  @Input() allTecnologies:ITecno[]=[];

  @Output() editEvent:EventEmitter<IProject> = new EventEmitter();
  @Output() deleteEvent:EventEmitter<IProject> = new EventEmitter();

  actual:boolean = false;
  showTecno:boolean= true;
  imagenes: any[] = [];
  allTecnologiesFiltred:ITecno[]=[];
  form:FormGroup;
  actualYear:Date= new Date();

  constructor( private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private storageService:StorageService ) {
    this.form = this.formBuilder.group({
     allTecnologiesFiltred:['']
    });


  }

  ngOnInit(): void {
    this.refreshTecnos();
    if(this.project.fecha==="En desarrollo"){ this.actual = true; }
  }

  refreshTecnos(){
    this.allTecnologiesFiltred = this.allTecnologies.filter(item => !this.project.tecnologias.some(other => item.id == other.id));

  }

  async onSubmit(){

    if(this.project.titulo.length === 0){
      alert("Por Favor complete el tìtulo del proyecto");
      return
    }
    if(this.project.fecha.length === 0){
      alert("Por Favor complete el año del proyecto");
      return
    }
    if((Number(this.project.fecha) <  1900 )|| (Number(this.project.fecha) > this.actualYear.getFullYear()) ){
      alert("Por favor indique un año entre 1900 y " +  this.actualYear.getFullYear()) ;
      return
    }
    if(this.project.descripcion.length === 0){
      alert("Por Favor complete la descrición del proyecto");
      return
    }
    if (this.imagenes[0] != null){
      try {
        await this.storageImagen(this.imagenes[0],"/portfolio/img/proyectos/");
      }
      catch (err) {
        console.log(err);
        alert("Error en el guardado de imagen");
      }
    }
      this.editEvent.emit(this.project)
  }

  addTecno(){

    console.log(this.form.value.allTecnologiesFiltred);

    const index = this.allTecnologiesFiltred.findIndex(object => {
      return object.name === this.form.value.allTecnologiesFiltred;
    });

    if (index>-1){
      this.project.tecnologias.push(this.allTecnologiesFiltred[index])
      this.refreshTecnos()
    }
    else {
      alert("Elija una tecnologia para agregar")
    }

  }

  onDeleteTecno(tecno:ITecno) {
    this.project.tecnologias.forEach((value,index)=>{
      if(value.name==tecno.name) this.project.tecnologias.splice(index,1);
    });

  this.refreshTecnos()
  }

  onDelete(proy:IProject) {
    this.deleteEvent.emit(proy);
  }

  onToggleEditProject() {

    this.showEditProject = !this.showEditProject;
    this.refreshTecnos()
  }

  checkLoggedIn():boolean{
    this.refreshTecnos()
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
    this.project.pathimg="";

  }

  async storageImagen(img:any,storeDirectory:string){
    try{
     await this.storageService.subirImagen(
        this.project.id+ "_" +this.project.titulo+ "_" + Date.now(),
        storeDirectory,img).then(urlImagen => {
         this.project.pathimg=urlImagen?.toString() ?? "";
       });
    } catch (err) {
     console.log(err);
    }
  }

  onActualChange(){
    this.actual = !this.actual;

    if(this.actual){
      this.project.fecha="En desarrollo"
    }else{
      this.project.fecha=""
    }
  }

}

