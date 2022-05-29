import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-editbtn',
  templateUrl: './editbtn.component.html',
  styleUrls: ['./editbtn.component.css']
})
export class EditbtnComponent implements OnInit {

  btnText:string ="Editar";
  backgroundColor:string ="#19657e";

  @Input() border:string= "";
  @Output() onBbtnClick = new EventEmitter();

  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.onBbtnClick.emit();
    if(this.btnText=="Editar"){
      this.btnText="Cerrar";
      this.backgroundColor ="#6c757d";
    }else{
      this.btnText="Editar";
      this.backgroundColor ="#19657e";
    }
  }

  checkLoggedIn():boolean{
    return this.authService.isUserLoggedIn()
  }

}
