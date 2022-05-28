import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IPersona } from 'src/app/Interfaces/IPersona';
import { Persona } from 'src/app/Model/Persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() persona:IPersona = new Persona();
  @Input() loggedIn:boolean = false;
  @Output() onSaveEvent:EventEmitter<IPersona> = new EventEmitter()
  @Output() newBannerimgEvent:EventEmitter<any[]> = new EventEmitter()
  @Output() OnToggleShowEdit:EventEmitter<boolean> =new EventEmitter()

  imagenes: any[] = [];

  showEdit:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleEditPerfil(){
    this.showEdit=!this.showEdit;
    this.OnToggleShowEdit.emit(this.showEdit);
  }

  addNewBanner(newBaneer:any){
    console.log("pasando por banner en header")
    this.newBannerimgEvent.emit(newBaneer);

  }

  onSave(persona:IPersona){
    this.onSaveEvent.emit(persona);
  }

}
